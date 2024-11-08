<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;


class AdminController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('LoginAdmin');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors([
            'email' => 'Les informations de connexion ne sont pas valides.',
        ]);
    }

    public function dashboard()
    {
        return Inertia::render('AdminDashboard');
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
    public function togglePaymentStatus(Request $request)
    {
        $request->validate(['userId' => 'required|integer|exists:users,id']);

        $user = User::find($request->input('userId'));
        if ($user) {
            $user->payement = $user->payement === "Validé" ? "Non validé" : "Validé";
            $user->save();
            return response()->json(['status' => 'success']);
        }
        return response()->json(['status' => 'error'], 404);
    }

}
