<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInformationTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('user_information', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenoms');
            $table->enum('sexe', ['Homme', 'Femme']);
            $table->enum('statut', ['Doctorant', 'Enseignant', 'Participant', 'Autres']);
            $table->string('ecole_origine');
            $table->string('umri_ufr');
            $table->string('n_etudiant')->nullable();
            $table->string('contact');
            $table->boolean('gala')->default(false);
            $table->boolean('acc')->default(false);
            $table->integer('n_acc')->nullable();
            $table->unsignedBigInteger('userid')->unique();
            $table->timestamps();

            $table->foreign('userid')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('user_information');
    }
}
