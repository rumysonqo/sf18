<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        <title>Ejecución Presupuestal 2018</title>

    </head>
    <body class="hold-transition sidebar-mini">
      <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
          <!-- Left navbar links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars fa-2x"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="{{url('/')}}" class="nav-link">Inicio</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="{{url('view_por_fuente')}}" class="nav-link">Por Fuente</a>
            </li>
              
            <li class="nav-item d-none d-sm-inline-block">
              <a href="{{url('view_por_programa')}}" class="nav-link">Por Programa</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="{{url('view_por_fuente_programa')}}" class="nav-link">Por Fuente/Programa</a>
            </li>
            
          </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <!-- Brand Logo -->
          <a href="index3.html" class="brand-link">
            <span class="brand-text font-weight-light">Ejecución Presupuestal 2018</span>
          </a>

          <!-- Sidebar -->
          <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                <li class="nav-item">
                      <a href="{{url('view_ppto_fuente_generica')}}" class="nav-link">
                        <i class="fas fa-money-check-alt fa-2x"></i>
                        <p>Ppto por Fuente/Generica</p>
                      </a>
                </li>

                <li class="nav-item">
                      <a href="{{url('view_ppto_fuente_generica_programa')}}" class="nav-link">
                      <i class="fas fa-money-check-alt fa-2x"></i>
                        <p>Ppto por Fte./Gen./Prog.</p>
                      </a>
                </li>

                <li class="nav-item">
                      <a href="{{url('view_graf_dsn_men5_est')}}" class="nav-link">
                        <i class="fas fa-male fa-2x"></i>
                        <p>Desnutrición Cronica/EESS</p>
                      </a>
                </li>

                
              </ul>
            </nav>
            <!-- /.sidebar-menu -->
          </div>
          <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
          <section class="content">
            <div class="container">
                  @yield('content')
            </div><!-- /.container-fluid -->
          </section>
          <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer">
          <strong>Copyright &copy; 2018 <a href="http://www.redcusconorte.gob.pe">Red Cusco Norte</a>.</strong>
          Todos los derechos reservados.
          <div class="float-right d-none d-sm-inline-block">
            <b>Ing. Abel Laurente</b>
          </div>
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
          <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
      </div>
<!-- ./wrapper -->

    <script src="{{ asset('js/app.js') }}"></script>
        
    </body>
</html>
