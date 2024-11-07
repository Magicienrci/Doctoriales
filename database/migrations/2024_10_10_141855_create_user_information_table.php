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
        $table->string('nom')->nullable();
        $table->string('prenoms')->nullable();
        $table->enum('sexe', ['Homme', 'Femme'])->nullable();
        $table->enum('statut', ['Doctorant', 'Enseignant', 'Participant', 'Autres'])->nullable();
        $table->string('ecole_origine')->nullable();
        $table->string('umri_ufr')->nullable();
        $table->string('n_etudiant')->nullable();
        $table->string('contact')->nullable();
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
