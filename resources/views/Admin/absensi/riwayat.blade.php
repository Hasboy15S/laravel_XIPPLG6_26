@extends('layouts.admin')

@section('title', 'Riwayat Absensi')

@section('content')
<div class="container-fluid">
    <h1 class="mb-3">Riwayat Absensi</h1>

    <form method="GET" class="mb-3">
        <input type="date" name="tanggal" value="{{ $tanggal }}">
        <button class="btn btn-info">Lihat</button>
    </form>

    <table class="table table-bordered">
        <tr>
            <th>Nama</th>
            <th>Status</th>
            <th>Keterangan</th>
        </tr>

        @foreach ($absensi as $item)
        <tr>
            <td>{{ $item->student->nama_lengkap }}</td>
            <td>{{ ucfirst($item->status) }}</td>
            <td>{{ $item->keterangan }}</td>
        </tr>
        @endforeach
    </table>
</div>
@endsection
