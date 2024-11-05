<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PaiementController extends Controller
{
    public function index()
    {
        // Récupère l'utilisateur actuellement authentifié
        $user = Auth::user();

        // Envoie les informations de l'utilisateur au composant Inertia "Paiement"
        return Inertia::render('Paiement', [
            'user' => $user
        ]);
    }
}
