<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('addEmployee', 'AuthController@refresh');

    // try to transfer methods here
    
});

#Users
Route::match(['get','post'],'user-add','UserController@store');
Route::match(['get','post'],'user-update','UserController@update');
Route::match(['get','post'],'users','UserController@index');
Route::match(['get','post'],'user-detail/{id}','UserController@edit');
Route::match(['get','post'],'user-delete/{id}','UserController@delete');


#Stores
Route::match(['get','post'],'store-add','StoresController@store');
Route::match(['get','post'],'store-update','StoresController@update');
Route::match(['get','post'],'stores','StoresController@index');
Route::match(['get','post'],'store-detail/{id}','StoresController@edit');
Route::match(['get','post'],'store-delete/{id}','StoresController@delete');















