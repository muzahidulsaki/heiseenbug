<?php

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::post('/contact', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'service' => 'nullable|string|max:255',
        'message' => 'required|string|min:10',
    ]);

    ContactMessage::create($validated);

    return back()->with('success', 'Thank you! Your message has been received.');
})->name('contact.submit');
