<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();
            $table->string('playerName');
            $table->string('month');
            $table->string('year');
            $table->integer('Q1')->nullable();
            $table->integer('Q2')->nullable();
            $table->integer('Q3')->nullable();
            $table->integer('Q4')->nullable();
            $table->integer('Q5')->nullable();
            $table->integer('Q6')->nullable();
            $table->integer('Q7')->nullable();
            $table->integer('Q8')->nullable();
            $table->integer('Q9')->nullable();
            $table->integer('Q10')->nullable();
            $table->integer('Q11')->nullable();
            $table->integer('Q12')->nullable();
            $table->integer('Q13')->nullable();
            $table->integer('Q14')->nullable();
            $table->integer('Q15')->nullable();
            $table->integer('Q16')->nullable();
            $table->integer('Q17')->nullable();
            $table->integer('Q18')->nullable();
            $table->integer('Q19')->nullable();
            $table->integer('Q20')->nullable();
            $table->integer('Q21')->nullable();
            $table->integer('Q22')->nullable();
            $table->integer('Q23')->nullable();
            $table->integer('Q24')->nullable();
            $table->integer('Q25')->nullable();
            $table->integer('Q26')->nullable();
            $table->integer('Q27')->nullable();
            $table->integer('Q28')->nullable();
            $table->integer('Q29')->nullable();
            $table->integer('Q30')->nullable();
            $table->integer('Q31')->nullable();
            $table->integer('Q32')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('surveys');
    }
};
