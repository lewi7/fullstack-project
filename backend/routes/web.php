<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/client','ClientController@getListClients');
Route::post('/addClient','ClientController@addClients');

Route::patch('/updateClient/{id}','ClientController@updateClients');
// Route::delete('/deleteClient/{id}','ClientController@deleteClients');