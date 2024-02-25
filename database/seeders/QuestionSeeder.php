<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questionLists=[
            'Visi dan Misi Telah dipahami secara jelas oleh setiap anggota organisasi dan di jabarkan secara focus dalam kebijakan dan program kerja sehari-hari!',
            'Pimpinan Melaksanakan dialog dua arah secara konsisten dengan seluruh jajaran untuk mengevaluasi kinerja, strategi, kebijaksanaan dan program kinerja dalam pencapaian visi dan misi organisasi!',
            'Pemimpin bersikap terbuka dan menerima perubahan kebijakan serta metode kerja baru yang lebih efisien!',
            'Ada tindak lanjut yang nyata atas hasil evaluasi terhadap kebijakan dan program kerja selama ini dalam meningkatkan kinerja dan pelayanan publik!',
            'Penerapan nilai-nilai budaya kerja sudah dilaksanakan secara berkelanjutan dalam suatu sistem kebijakan publik yang nyata sampai dengan implementasi kebijakan publik dalam rangka pelayanan masyarakat!',
            'Sistem kebijakan publik yang diterapkan telah mencapai tujuan!',
            'Organisasi telah menerangkan standar kualitas masyarakat yang sesuai dengan tuntutan/kebutuhan masyarakat!',
            'Organisasi telah menerapkan sistem pengendalian mutu kinerja untuk meningkatkan kinerja penyelenggaraan kepemerintahan dan pelayanan masyarakat!',
            'Upaya pembangunan SDM dalam Membentuk pola pikir, sikap dan cara kerja yang produktif telah dilaksanakan secara komperhensif dan berkelanjutan!',
            'Pimpinan melanjutkan komitmen dan keteladanan dalam melaksanakan secara konsisten visi misi serta nilai-nilai budaya kerja!',
            'Telah terjadi perubahan pola pikir dan cara kerja dari yang selama ini bersifat terkotak kotak sinergis!',
            'Telah terjadi perubahan pola pikir dan cara kerja yang hanya menjalankan wewenang menjadi menjalankan peran!',
            'Telah terjadi perubahan pola pikir dan cara kerja dari yang hanya berpikir jangka pendek/sesaat menjadi berpikir jangka pangjang/strategis!',
            'Telah terjdi perubahan pola pikir dan cara kerja dari yang bersifat memerintahkan menjadi bersifat melayani!',
            'Telah terjadi perubahan pola pikir dan cara dan cara kerja dari yang bersifat melaksanakan rutinitas selama ini menjadi bersifat melakukan perbaikan dan meningkatkan terus-menerus!',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Komitmen dan Konsistensi',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Wewenang dan tanggung jawab',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Keikhlasan dan kejujuran',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Integritas dan profesionalisme',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Kreativitas dan kepekaan terhadap lingkungan tugas',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Kepemimpinan dan keteladanaan',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Kebersamaan dan dinamika kelompok kerja',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Ketepatan / keakurasian dan kecepatan',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Rasionalitas dan kecerdasan emosi',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Keteguhan dan ketegasan',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Disiplin dan keteraturan bekerja',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Keberanian dan kearifan dalam mengambil keputusan dan menangani konflik',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Dedikasi dan loyalitas',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Semangat dan motivasi',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Ketekunan dan kesabaran',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Keadilan dan keterbukaan',
            'Dalam melaksanakan tugas pokok dan fungsi yang menjadi tanggung jawab saudara,didasarkan pada nilai-nilai dasar budaya kerja sebagai berikut :
            Penguasaan ilmu pengetahuan dan teknologi',
           

        ];

        foreach($questionLists as $question){
            Question::create(
                ['question'=>$question]
            );
        }
    }
}
