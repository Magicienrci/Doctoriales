<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserInformationController;
use App\Http\Controllers\PaiementController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\Auth\RegisteredUserController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Pour les infos
Route::get('/informations', [UserInformationController::class, 'index'])->name('user.information')->middleware('auth');
Route::post('/informations', [UserInformationController::class, 'store'])->name('user.store')->middleware('auth');
Route::put('/informations/{userInformation}', [UserInformationController::class, 'update'])->name('user.update')->middleware('auth');

// Route pour le composant UserCommunication
Route::get('/communication', function () {
    return Inertia::render('UserCommunication');
})->name('user.communication');

// Pour le paiement
Route::get('/securepay', [PaiementController::class, 'index'])
    ->middleware('auth')
    ->name('user.paiement');

// Pour les admins
Route::get('admin/login', [AdminController::class, 'showLoginForm'])->name('admin.login');
Route::post('admin/login', [AdminController::class, 'login'])->name('admin.login.submit');

// Tableau de bord de l'admin
Route::get('admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard')->middleware('auth:admin');

// Déconnexion de l'admin
Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');

Route::get('/admin/tableaudebase', [AdminDashboardController::class, 'index'])->name('admin.tableaudebase');

Route::post('/admin/toggle-payment-status', [AdminController::class, 'togglePaymentStatus'])
    ->middleware('auth:admin');


require __DIR__.'/auth.php';
require __DIR__.'/auth.php';
