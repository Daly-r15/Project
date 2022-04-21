<?php

namespace App\Http\Controllers;

use App\Models\Answers;
use Illuminate\Http\Request;

class AnswersController extends Controller
{
    public function index()
    {
        return Answers::all();
    }
 
    public function show($id)
    {
        return Answers::find($id);
    }

    public function store(Request $request)
    {
        return Answers::create($request->all());
    }

    // public function edit(Request $request,$id)
    // {
    //     $question_edit = $request->input('question_edit');
    //     DB::update('update questions set Questions = ? where id= ?', [$question_edit,$id]);
    // }
}
