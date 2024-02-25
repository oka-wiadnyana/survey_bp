<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurveyController extends Controller
{
    public function insertSurvey(Request $request){


        $answerList=[];
       foreach($request->answer as $key=>$value){
        $q=$key+1;
        switch ($value) {
            case "Ya":
              $answer=1;
              break;
            case "Sering":
                $answer=2;
              break;
            case "Kurang":
                $answer=3;
              break;
            default:
            $answer=4;
          }
        $answerList["Q$q"]=$answer;
       }

       Survey::create(array_merge($request->except('answer'),$answerList));

      //  return Inertia::location(route('survey'));
    }
}
