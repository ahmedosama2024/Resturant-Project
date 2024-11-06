<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Validator;

class UserController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate=Validator::make($request->all(),[
            'name'=>'requried|max:255',
            'email'=>'required|string|lowercase|email|max:255|unique:users',
            'password'=>'required|min:8|confirmed'
        ]);
        if(!$validate){
            return response()->json($validate->errors());
        }
        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=> Hash::make($request->password),
            'role'=> $request->role?$request->role:"user"
        ]);
        $token = $user->createToken($user->name)->plainTextToken;
        $data=[
            'user'=>$user,
            'token'=>$token
        ];
        
        return response()->json($data);
    }

    
    /**
     * login.
     */
    public function login( Request $request)
    {
        $validate=Validator::make($request->all(),[
            'email'=>'required|email|exists:users',
            'password'=>'required'
        ]);
        if(!$validate){
            return response()->json($validate->errors());
        }
        $user=User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password,$user->password)){
            return response()->json(["error"=>"The Data is Uncorrect"]);
        }
        $token = $user->createToken($user->name)->plainTextToken;
        
        $data=[
            'user'=>$user,
            'token'=>$token
        ];
        
        return response()->json($data);

    }
    //logout
    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return ['message'=>'You Are Logged Out'];
    }


}
