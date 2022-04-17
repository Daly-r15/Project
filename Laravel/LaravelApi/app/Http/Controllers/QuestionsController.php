<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Questions;
use DB;

class QuestionsController extends Controller
{
    public function index()
    {
        return Questions::all();
    }
 
    public function show($id)
    {
        return Questions::find($id);
    }

    public function store(Request $request)
    {
        return Questions::create($request->all());
    }

    public function edit(Request $request,$id)
    {
        $question_edit = $request->input('question_edit');
        DB::update('update questions set Questions = ? where id= ?', [$question_edit,$id]);
    }

}
