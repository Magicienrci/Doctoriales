<?php

namespace App\Http\Controllers;

use App\Models\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserInformationController extends Controller
{
    public function index()
    {
        $userInformation = UserInformation::where('userid', Auth::id())->first();

        return Inertia::render('UserInformation', [
            'userInformation' => $userInformation,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenoms' => 'required|string|max:255',
            'sexe' => 'required|in:Homme,Femme',
            'statut' => 'required|in:Doctorant,Enseignant,Participant,Autres',
            'ecole_origine' => 'required|string|max:255',
            'umri_ufr' => 'required|string|max:255',
            'n_etudiant' => 'nullable|string|max:255',
            'contact' => 'required|string|max:255',
            'gala' => 'required|boolean',
            'acc' => 'required|boolean',
            'n_acc' => 'nullable|integer|min:1|max:3',
        ]);

        UserInformation::create([
            'userid' => Auth::id(),
            'nom' => $request->nom,
            'prenoms' => $request->prenoms,
            'sexe' => $request->sexe,
            'statut' => $request->statut,
            'ecole_origine' => $request->ecole_origine,
            'umri_ufr' => $request->umri_ufr,
            'n_etudiant' => $request->n_etudiant,
            'contact' => $request->contact,
            'gala' => $request->gala,
            'acc' => $request->acc,
            'n_acc' => $request->n_acc,
        ]);

        return redirect()->route('user.information');
    }

    public function update(Request $request, UserInformation $userInformation)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenoms' => 'required|string|max:255',
            'sexe' => 'required|in:Homme,Femme',
            'statut' => 'required|in:Doctorant,Enseignant,Participant,Autres',
            'ecole_origine' => 'required|string|max:255',
            'umri_ufr' => 'required|string|max:255',
            'n_etudiant' => 'nullable|string|max:255',
            'contact' => 'required|string|max:255',
            'gala' => 'required|boolean',
            'acc' => 'required|boolean',
            'n_acc' => 'nullable|integer|min:1|max:3',
        ]);

        $userInformation->update($request->all());

        return redirect()->route('user.information');
    }
}
