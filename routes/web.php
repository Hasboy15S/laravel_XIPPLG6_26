<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\AttendanceController;


Route::get('/', [LandingController::class, 'index'])->name('landing');
Route::prefix('admin')->name('admin.')->group(function(){
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::resource('students', StudentController::class);
Route::get('/absensi', [AttendanceController::class, 'index'])->name('absensi.index');
Route::post('/absensi', [AttendanceController::class, 'store'])->name('absensi.store');
Route::get('/absensi/riwayat', [AttendanceController::class, 'riwayat'])->name('absensi.riwayat');

});



