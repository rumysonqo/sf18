@extends('plantilla')

@section('content')
<div id="sf18">
    <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
                <div class="inner">
                    <center>    
                        <h3>PIA</h3>
                        <p>Ppto. Institucional de Apertura</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            @{{ item.pia }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-success">
                <div class="inner">
                    <center>    
                        <h3>PIM</h3>
                        <p>Ppto. Institucional Modificado</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            @{{ item.pim }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-warning">
                <div class="inner">
                    <center>    
                        <h3>Deveng.</h3>
                        <p>Ppto. Devengado</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            @{{ item.devengado }}
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

        <div class="col-lg-3 col-6">
            <div class="small-box bg-danger">
                <div class="inner">
                    <center>    
                        <h3>% Ejec.</h3>
                        <p>% de ejecución Presupuestal</p>
                        <h4 v-for ="(item, index) in presupuesto">
                            @{{ item.porcentaje }} %
                        </h4>
                    </center>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice-dollar"></i>
                </div>
                
            </div>    
        </div>

       



    
    </div>
    </div>
    
    
    
    
    <div id="chartdiv" style="width: 100%; height: 600px;"></div>
</div>
@endsection