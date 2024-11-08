<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInformation;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        // Récupérer tous les utilisateurs
        $users = User::all();

        // Récupérer toutes les informations des utilisateurs
        $userInformations = UserInformation::all();

        // Transmettre les utilisateurs et les informations supplémentaires à la vue Inertia
        return Inertia::render('Tableauadmin', [
            'users' => $users,
            'userInformations' => $userInformations,
        ]);
    }
}
