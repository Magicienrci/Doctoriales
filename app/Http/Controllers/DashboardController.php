<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Show the dashboard page.
     */
    public function index()
    {
        // Retourne la vue Inertia avec l'utilisateur connecté
        return Inertia::render('Dashboard', [
            'user' => Auth::user(),  // Passer les informations de l'utilisateur connecté
        ]);
    }
}
