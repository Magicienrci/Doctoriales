<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'prenoms', 'sexe', 'statut', 'ecole_origine', 'umri_ufr', 'n_etudiant', 'contact', 'gala', 'acc', 'n_acc', 'userid',
    ];

    // Relation avec l'utilisateur
    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }
}
