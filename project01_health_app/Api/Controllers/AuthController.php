<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $name = $request->name;
        $email =$request->email;
        $password = bcrypt($request->password);

        $user = new User;
        $user->name = $name;
        $user->email = $email;
        $user->password = $password;
        $user->save();

        return response("Data Inserted Successfully");
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);

        if(Auth::attempt(['email' => $request->email, 'password'=> $request->password]))
        {
            $user = Auth::user();
            return response($user);
        }else{
            $message = "please login first";
            return response($message);
        }

    }


    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        return response([
            "message"=>"Logout Successfully"
        ]);

    }

}
