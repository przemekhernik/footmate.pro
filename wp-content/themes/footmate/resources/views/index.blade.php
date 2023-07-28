@extends('base')

@section('sidebar')
  <sidebar class="app__sidebar">
    {!! do_action('get_sidebar') !!}
  </sidebar>
@endsection
