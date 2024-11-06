<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;


    
Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);
Route::get('/appointments',[ApiController::class,'index']);
Route::get('/users',[ApiController::class,'users']);
Route::post('/appointments',[ApiController::class,'store']);
Route::post('/register',[UserController::class,'store']);
Route::post('/login',[UserController::class,'login']);
Route::post('/logout',[UserController::class,'logout'])->middleware('auth:sanctum');
Route::get('/appointments/{id}',[ApiController::class,'show']);
Route::delete('/appointments/{id}',[ApiController::class,'destroy']);

