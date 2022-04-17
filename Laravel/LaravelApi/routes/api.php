<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('userdetails','App\Http\Controllers\UserDetailsController@index');
Route::get('userdetails/{id}','App\Http\Controllers\UserDetailsController@show');
Route::post('userdetails','App\Http\Controllers\UserDetailsController@store');
// Route::get('userdetails','App\Http\Controllers\UserDetailsController@update');
// Route::get('userdetails','App\Http\Controllers\UserDetailsController@delete');

Route::get('questions','App\Http\Controllers\QuestionsController@index');
Route::get('questions/{id}','App\Http\Controllers\QuestionsController@show');
Route::post('questions','App\Http\Controllers\QuestionsController@store');
Route::put('questions/{id}','App\Http\Controllers\QuestionsController@edit');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
