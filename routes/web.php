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

Route::get('/','Ctrl_sf18@index');
Route::get('presupuesto_total','Ctrl_sf18@presupuesto_total');
Route::get('graf_ava_men','Ctrl_sf18@graf_ava_men');

Route::get('view_por_fuente','Ctrl_sf18@view_por_fuente');
Route::get('fuente','Ctrl_sf18@fuente');
Route::get('presupuesto_fuente/{fte}','Ctrl_sf18@presupuesto_fuente');
Route::get('graf_ava_men_fuente/{fte}','Ctrl_sf18@graf_ava_men_fuente');

Route::get('view_por_programa','Ctrl_sf18@view_por_programa');
Route::get('programa','Ctrl_sf18@programa');
Route::get('presupuesto_programa/{prg}','Ctrl_sf18@presupuesto_programa');
Route::get('graf_ava_men_programa/{prg}','Ctrl_sf18@graf_ava_men_programa');

Route::get('view_por_fuente_programa','Ctrl_sf18@view_por_fuente_programa');
Route::get('programa_fuente/{fte}','Ctrl_sf18@programa_fuente');
Route::get('presupuesto_fuente_programa/{fte}/{prg}','Ctrl_sf18@presupuesto_fuente_programa');
Route::get('graf_ava_men_fuente_programa/{fte}/{prg}','Ctrl_sf18@graf_ava_men_fuente_programa');

Route::get('view_ppto_fuente_generica','Ctrl_sf18@view_ppto_fuente_generica');
Route::get('generica_fuente/{fte}','Ctrl_sf18@generica_fuente');
Route::get('presupuesto_fuente_generica/{fte}/{gen}','Ctrl_sf18@presupuesto_fuente_generica');
Route::get('ppto_fuente_generica/{fte}/{gen}','Ctrl_sf18@ppto_fuente_generica');

Route::get('view_pru','Ctrl_sf18@view_pru');

Route::get('view_ppto_fuente_generica_programa','Ctrl_sf18@view_ppto_fuente_generica_programa');
