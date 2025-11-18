@extends('layouts.admin')

@section('title', 'Dashboard Admin')

@section('content')
  <div class="container-fluid">
    <h1 class="mb-3">Dashboard Admin</h1>
    <div class="card">
      <div class="card-body">
        Selamat datang di panel admin <b>Dilesin Academy</b> 
      </div>
      <ul>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.absensi.index') }}">Absensi</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.absensi.riwayat') }}">Riwayat Absensi</a>
        </li>
      </ul>
    </div>
  </div>
@endsection
