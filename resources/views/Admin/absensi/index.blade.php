@extends('layouts.admin')

@section('title', 'Absensi Siswa')

@section('content')
<div class="container-fluid">
    <h1 class="mb-3">Absensi Tanggal {{ $tanggal }}</h1>

    <form action="{{ route('admin.absensi.store') }}" method="POST">
        @csrf
        <input type="hidden" name="tanggal" value="{{ $tanggal }}">

        <table class="table table-bordered">
            <tr>
                <th>Nama Siswa</th>
                <th>Status</th>
                <th>Keterangan</th>
            </tr>

            @foreach ($siswa as $item)
            <tr>
                <td>{{ $item->nama_lengkap }}</td>
                <td>
                    <select name="status[{{ $item->id }}]" class="form-control">
                        <option value="hadir">Hadir</option>
                        <option value="izin">Izin</option>
                        <option value="sakit">Sakit</option>
                        <option value="alpha">Alpha</option>
                    </select>
                </td>
                <td>
                    <input type="text" name="keterangan[{{ $item->id }}]" class="form-control" placeholder="(Opsional)">
                </td>
            </tr>
            @endforeach
        </table>

        <button class="btn btn-primary">Simpan Absensi</button>
    </form>
</div>
@endsection
