<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserDetails;
use Illuminate\Support\Facades\DB;

class UserDetailsController extends Controller
{
    public function index()
    {
        return UserDetails::all();
    }
 
    public function show($id)
    {
        return UserDetails::find($id);
    }

    public function store(Request $request)
    {
        return UserDetails::create($request->all());
    }

    // public function update(Request $request, $id)
    // {
    //     $article = UserDetails::findOrFail($id);
    //     $article->update($request->all());

    //     return $article;
    // }

    // public function delete($id)
    // {
    //     $article = UserDetails::findOrFail($id);
    //     $article->delete();

    //     return 204;
    // }
}
