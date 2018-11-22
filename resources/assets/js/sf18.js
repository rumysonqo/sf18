new Vue({
    el: '#sf18',
    created:function(){
      this.getPresupuesto(),
      this.getGraf_ava_men(),
      this.getFuente(),
      this.getPrograma()
    },
    data:{
      search:'',
      fte_sel:'',
      prg_sel:'',
      gen_sel:'',
      dataTable:null,
      selected:[],
      microred:[],
      presupuesto:[],
      avance_mensual:[],
      detalle_avance:[],
      generica:[],
      pagination: {rowsPerPage:10},
      fuente:[],
      programa:[],
      headers_presup: [
        { text: 'Clasificador', value: 'nombre_especifica' },
        { text: 'PIM', value: 'pim' },
        { text: 'Devengado', value: 'devengado' },
        { text: 'Saldo', value: 'saldo' },
        { text: '% Ejecución', value: 'porcentaje' }
      ],
      errors:[]
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },

    methods:{
      async getFuente(){
        var urlFuente='fuente';
        try{
          const res = await axios.get(urlFuente)
          this.fuente=res.data
          } catch(e){
            this.errors.push(e)
          }
      },

      async getPrograma(){
        var urlPrograma='programa';
        try{
          const res = await axios.get(urlPrograma)
          this.programa=res.data
          } catch(e){
            this.errors.push(e)
          }
      },

      async getPrograma_fuente(){
        var urlPrograma='programa_fuente/'+this.fte_sel.id;
        try{
          const res = await axios.get(urlPrograma)
          this.programa=res.data
          } catch(e){
            this.errors.push(e)
          }
      },

      async getGenerica_fuente(){
        var urlGenerica='generica_fuente/'+this.fte_sel.id;
        try{
          const res = await axios.get(urlGenerica)
          this.generica=res.data
          } catch(e){
            this.errors.push(e)
          }
      },


      async getPresupuesto_fuente(){
        var urlPresupuesto='presupuesto_fuente/'+this.fte_sel.id;
        try{
            const res=await axios.get(urlPresupuesto)
            this.presupuesto=res.data
            } catch(e){
              this.errors.push(e)
            }
      },

      async getPresupuesto_programa(){
        var urlPresupuesto='presupuesto_programa/'+this.prg_sel.id;
        try{
            const res=await axios.get(urlPresupuesto)
            this.presupuesto=res.data
            } catch(e){
              this.errors.push(e)
            }
      },


      async getPresupuesto_fuente_generica(){
        var urlPresupuesto='presupuesto_fuente_generica/'+this.fte_sel.id+"/"+this.gen_sel.id;
        try{
            const res=await axios.get(urlPresupuesto)
            this.presupuesto=res.data
            } catch(e){
              this.errors.push(e)
            }
      },

      async getPresupuesto(){
        var urlPresupuesto='presupuesto_total';
        try{
            const res=await axios.get(urlPresupuesto)
            this.presupuesto=res.data
            } catch(e){
              this.errors.push(e)
            }
      },


      async getPresupuesto_fuente_programa(){
        var urlPresupuesto='presupuesto_fuente_programa/'+this.fte_sel.id+"/"+this.prg_sel.id;
        try{
            const res=await axios.get(urlPresupuesto)
            this.presupuesto=res.data
            } catch(e){
              this.errors.push(e)
            }
      },

      async getGraf_ava_men(){
        var urlGraf_ava_men='graf_ava_men';
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data
            } catch(e){
              this.errors.push(e)
            }

        var data_avance=[];
        var acum=0;
        if(this.avance_mensual.length > 0){
          acum=parseFloat(this.avance_mensual[0]['dv01']);
          data_avance.push({
            "mes":'Enero',
            "mensual":parseFloat(this.avance_mensual[0]['cm01']),
            "devengado":parseFloat(this.avance_mensual[0]['dv01']),
            "girado":parseFloat(this.avance_mensual[0]['gr01']),
            "porcentaje":parseFloat(acum/parseFloat(this.avance_mensual[0]['pim'])*100).toFixed(2)
          });

          acum+=parseFloat(this.avance_mensual[0]['dv02']);
          data_avance.push({
            "mes":'Febrero',
            "mensual":parseFloat(this.avance_mensual[0]['cm02']),
            "devengado":parseFloat(this.avance_mensual[0]['dv02']),
            "girado":parseFloat(this.avance_mensual[0]['gr02']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv03']);
          data_avance.push({
            "mes":'Marzo',
            "mensual":parseFloat(this.avance_mensual[0]['cm03']),
            "devengado":parseFloat(this.avance_mensual[0]['dv03']),
            "girado":parseFloat(this.avance_mensual[0]['gr03']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv04']);
          data_avance.push({
            "mes":'Abril',
            "mensual":parseFloat(this.avance_mensual[0]['cm04']),
            "devengado":parseFloat(this.avance_mensual[0]['dv04']),
            "girado":parseFloat(this.avance_mensual[0]['gr04']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv05']);
          data_avance.push({
            "mes":'Mayo',
            "mensual":parseFloat(this.avance_mensual[0]['cm05']),
            "devengado":parseFloat(this.avance_mensual[0]['dv05']),
            "girado":parseFloat(this.avance_mensual[0]['gr05']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv06']);
          data_avance.push({
            "mes":'Junio',
            "mensual":parseFloat(this.avance_mensual[0]['cm06']),
            "devengado":parseFloat(this.avance_mensual[0]['dv06']),
            "girado":parseFloat(this.avance_mensual[0]['gr06']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv07']);
          data_avance.push({
            "mes":'Julio',
            "mensual":parseFloat(this.avance_mensual[0]['cm07']),
            "devengado":parseFloat(this.avance_mensual[0]['dv07']),
            "girado":parseFloat(this.avance_mensual[0]['gr07']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv08']);
          data_avance.push({
            "mes":'Agosto',
            "mensual":parseFloat(this.avance_mensual[0]['cm08']),
            "devengado":parseFloat(this.avance_mensual[0]['dv08']),
            "girado":parseFloat(this.avance_mensual[0]['gr08']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv09']);
          data_avance.push({
            "mes":'Setiembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm09']),
            "devengado":parseFloat(this.avance_mensual[0]['dv09']),
            "girado":parseFloat(this.avance_mensual[0]['gr09']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv10']);
          data_avance.push({
            "mes":'Octubre',
            "mensual":parseFloat(this.avance_mensual[0]['cm10']),
            "devengado":parseFloat(this.avance_mensual[0]['dv10']),
            "girado":parseFloat(this.avance_mensual[0]['gr10']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv11']);
          data_avance.push({
            "mes":'Noviembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm11']),
            "devengado":parseFloat(this.avance_mensual[0]['dv11']),
            "girado":parseFloat(this.avance_mensual[0]['gr11']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv12']);
          data_avance.push({
            "mes":'Diciembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm12']),
            "devengado":parseFloat(this.avance_mensual[0]['dv12']),
            "girado":parseFloat(this.avance_mensual[0]['gr12']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
        }
        console.log(data_avance);

        var chart = AmCharts.makeChart("chartdiv", {
          "type": "serial",
          "theme": "light",
          "legend": {
              "equalWidths": false,
              "useGraphSettings": true,
              "valueAlign": "left",
              "valueWidth": 120
          },
          "dataProvider": data_avance,


          "valueAxes": [{
            "id": "dineroAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "Monto en Millones de Soles"
        }, {
            "id": "porcentajeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            //"labelsEnabled": false,
            "position": "right",
            "title": "% Ejecución"
        }],

          "graphs": [{
              "alphaField": "alpha",
              "balloonText": "Devengado: [[value]] Soles",
              "dashLengthField": "dashLength",
              "fillAlphas": 3,
              "legendValueText": "[[value]]",
              "title": "Devengado",
              "type": "column",
              "valueField": "devengado",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Compromiso Mensual: [[value]] Soles",
              "bullet": "round",
              "lineThickness":3,
              "lineColor":"#EABC05",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "bulletColor": "#FFFFFF",
              //"bulletSizeField": "townSize",
              "dashLengthField": "dashLength",
              //"descriptionField": "townName",
              "legendValueText": "[[value]]",
              "title": "Comp. Mensual",
              "fillAlphas": 0,
              "valueField": "mensual",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Girado:[[value]] Soles",
              "bullet": "round",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "lineThickness":3,
              "lineColor":"#05BE02",
              //"bulletBorderThickness": 3,
              "dashLengthField": "dashLength",
              "legendValueText": "[[value]]",
              "title": "Girado",
              "fillAlphas": 0,
              "valueField": "girado",
              "valueAxis": "dineroAxis"
          },

          {
            "balloonText": "% Ejecución:[[value]] %",
            "bullet": "square",
            "bulletBorderAlpha": 3,
            "lineThickness":3,
            "lineColor":"#F3290E",
            "bulletBorderThickness": 3,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "% Ejecución",
            "fillAlphas": 0,
            "valueField": "porcentaje",
            "valueAxis": "porcentajeAxis"
        }],

          "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
          "categoryField": "mes",
          "export": {
            "enabled": true
           }
      });

       

      },



      async getGraf_ava_men_fuente(){
        var urlGraf_ava_men='graf_ava_men_fuente/'+this.fte_sel.id;
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data
            } catch(e){
              this.errors.push(e)
            }

        var data_avance=[];
        var acum=0;
        if(this.avance_mensual.length > 0){
          acum=parseFloat(this.avance_mensual[0]['dv01']);
          data_avance.push({
            "mes":'Enero',
            "mensual":parseFloat(this.avance_mensual[0]['cm01']),
            "devengado":parseFloat(this.avance_mensual[0]['dv01']),
            "girado":parseFloat(this.avance_mensual[0]['gr01']),
            "porcentaje":parseFloat(acum/parseFloat(this.avance_mensual[0]['pim'])*100).toFixed(2)
          });

          acum+=parseFloat(this.avance_mensual[0]['dv02']);
          data_avance.push({
            "mes":'Febrero',
            "mensual":parseFloat(this.avance_mensual[0]['cm02']),
            "devengado":parseFloat(this.avance_mensual[0]['dv02']),
            "girado":parseFloat(this.avance_mensual[0]['gr02']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv03']);
          data_avance.push({
            "mes":'Marzo',
            "mensual":parseFloat(this.avance_mensual[0]['cm03']),
            "devengado":parseFloat(this.avance_mensual[0]['dv03']),
            "girado":parseFloat(this.avance_mensual[0]['gr03']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv04']);
          data_avance.push({
            "mes":'Abril',
            "mensual":parseFloat(this.avance_mensual[0]['cm04']),
            "devengado":parseFloat(this.avance_mensual[0]['dv04']),
            "girado":parseFloat(this.avance_mensual[0]['gr04']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv05']);
          data_avance.push({
            "mes":'Mayo',
            "mensual":parseFloat(this.avance_mensual[0]['cm05']),
            "devengado":parseFloat(this.avance_mensual[0]['dv05']),
            "girado":parseFloat(this.avance_mensual[0]['gr05']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv06']);
          data_avance.push({
            "mes":'Junio',
            "mensual":parseFloat(this.avance_mensual[0]['cm06']),
            "devengado":parseFloat(this.avance_mensual[0]['dv06']),
            "girado":parseFloat(this.avance_mensual[0]['gr06']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv07']);
          data_avance.push({
            "mes":'Julio',
            "mensual":parseFloat(this.avance_mensual[0]['cm07']),
            "devengado":parseFloat(this.avance_mensual[0]['dv07']),
            "girado":parseFloat(this.avance_mensual[0]['gr07']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv08']);
          data_avance.push({
            "mes":'Agosto',
            "mensual":parseFloat(this.avance_mensual[0]['cm08']),
            "devengado":parseFloat(this.avance_mensual[0]['dv08']),
            "girado":parseFloat(this.avance_mensual[0]['gr08']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv09']);
          data_avance.push({
            "mes":'Setiembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm09']),
            "devengado":parseFloat(this.avance_mensual[0]['dv09']),
            "girado":parseFloat(this.avance_mensual[0]['gr09']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv10']);
          data_avance.push({
            "mes":'Octubre',
            "mensual":parseFloat(this.avance_mensual[0]['cm10']),
            "devengado":parseFloat(this.avance_mensual[0]['dv10']),
            "girado":parseFloat(this.avance_mensual[0]['gr10']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv11']);
          data_avance.push({
            "mes":'Noviembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm11']),
            "devengado":parseFloat(this.avance_mensual[0]['dv11']),
            "girado":parseFloat(this.avance_mensual[0]['gr11']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv12']);
          data_avance.push({
            "mes":'Diciembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm12']),
            "devengado":parseFloat(this.avance_mensual[0]['dv12']),
            "girado":parseFloat(this.avance_mensual[0]['gr12']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
        }
        console.log(data_avance);

        var chart = AmCharts.makeChart("chartdiv", {
          "type": "serial",
          "theme": "light",
          "legend": {
              "equalWidths": false,
              "useGraphSettings": true,
              "valueAlign": "left",
              "valueWidth": 120
          },
          "dataProvider": data_avance,


          "valueAxes": [{
            "id": "dineroAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "Monto en Soles"
        }, {
            "id": "porcentajeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            //"labelsEnabled": false,
            "position": "right",
            "title": "% Ejecución"
        }],

          "graphs": [{
              "alphaField": "alpha",
              "balloonText": "Devengado: [[value]] Soles",
              "dashLengthField": "dashLength",
              "fillAlphas": 3,
              "legendValueText": "[[value]]",
              "title": "Devengado",
              "type": "column",
              "valueField": "devengado",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Compromiso Mensual: [[value]] Soles",
              "bullet": "round",
              "lineThickness":3,
              "lineColor":"#EABC05",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "bulletColor": "#FFFFFF",
              //"bulletSizeField": "townSize",
              "dashLengthField": "dashLength",
              //"descriptionField": "townName",
              "legendValueText": "[[value]]",
              "title": "Comp. Mensual",
              "fillAlphas": 0,
              "valueField": "mensual",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Girado:[[value]] Soles",
              "bullet": "round",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "lineThickness":3,
              "lineColor":"#05BE02",
              //"bulletBorderThickness": 3,
              "dashLengthField": "dashLength",
              "legendValueText": "[[value]]",
              "title": "Girado",
              "fillAlphas": 0,
              "valueField": "girado",
              "valueAxis": "dineroAxis"
          },

          {
            "balloonText": "% Ejecución:[[value]] %",
            "bullet": "square",
            "bulletBorderAlpha": 3,
            "lineThickness":3,
            "lineColor":"#F3290E",
            "bulletBorderThickness": 3,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "% Ejecución",
            "fillAlphas": 0,
            "valueField": "porcentaje",
            "valueAxis": "porcentajeAxis"
        }],

          "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
          "categoryField": "mes",
          "export": {
            "enabled": true
           }
      });

       

      },


      async getGraf_ava_men_programa(){
        var urlGraf_ava_men='graf_ava_men_programa/'+this.prg_sel.id;
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data
            } catch(e){
              this.errors.push(e)
            }

        var data_avance=[];
        var acum=0;
        if(this.avance_mensual.length > 0){
          acum=parseFloat(this.avance_mensual[0]['dv01']);
          data_avance.push({
            "mes":'Enero',
            "mensual":parseFloat(this.avance_mensual[0]['cm01']),
            "devengado":parseFloat(this.avance_mensual[0]['dv01']),
            "girado":parseFloat(this.avance_mensual[0]['gr01']),
            "porcentaje":parseFloat(acum/parseFloat(this.avance_mensual[0]['pim'])*100).toFixed(2)
          });

          acum+=parseFloat(this.avance_mensual[0]['dv02']);
          data_avance.push({
            "mes":'Febrero',
            "mensual":parseFloat(this.avance_mensual[0]['cm02']),
            "devengado":parseFloat(this.avance_mensual[0]['dv02']),
            "girado":parseFloat(this.avance_mensual[0]['gr02']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv03']);
          data_avance.push({
            "mes":'Marzo',
            "mensual":parseFloat(this.avance_mensual[0]['cm03']),
            "devengado":parseFloat(this.avance_mensual[0]['dv03']),
            "girado":parseFloat(this.avance_mensual[0]['gr03']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv04']);
          data_avance.push({
            "mes":'Abril',
            "mensual":parseFloat(this.avance_mensual[0]['cm04']),
            "devengado":parseFloat(this.avance_mensual[0]['dv04']),
            "girado":parseFloat(this.avance_mensual[0]['gr04']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv05']);
          data_avance.push({
            "mes":'Mayo',
            "mensual":parseFloat(this.avance_mensual[0]['cm05']),
            "devengado":parseFloat(this.avance_mensual[0]['dv05']),
            "girado":parseFloat(this.avance_mensual[0]['gr05']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv06']);
          data_avance.push({
            "mes":'Junio',
            "mensual":parseFloat(this.avance_mensual[0]['cm06']),
            "devengado":parseFloat(this.avance_mensual[0]['dv06']),
            "girado":parseFloat(this.avance_mensual[0]['gr06']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv07']);
          data_avance.push({
            "mes":'Julio',
            "mensual":parseFloat(this.avance_mensual[0]['cm07']),
            "devengado":parseFloat(this.avance_mensual[0]['dv07']),
            "girado":parseFloat(this.avance_mensual[0]['gr07']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv08']);
          data_avance.push({
            "mes":'Agosto',
            "mensual":parseFloat(this.avance_mensual[0]['cm08']),
            "devengado":parseFloat(this.avance_mensual[0]['dv08']),
            "girado":parseFloat(this.avance_mensual[0]['gr08']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv09']);
          data_avance.push({
            "mes":'Setiembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm09']),
            "devengado":parseFloat(this.avance_mensual[0]['dv09']),
            "girado":parseFloat(this.avance_mensual[0]['gr09']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv10']);
          data_avance.push({
            "mes":'Octubre',
            "mensual":parseFloat(this.avance_mensual[0]['cm10']),
            "devengado":parseFloat(this.avance_mensual[0]['dv10']),
            "girado":parseFloat(this.avance_mensual[0]['gr10']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv11']);
          data_avance.push({
            "mes":'Noviembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm11']),
            "devengado":parseFloat(this.avance_mensual[0]['dv11']),
            "girado":parseFloat(this.avance_mensual[0]['gr11']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv12']);
          data_avance.push({
            "mes":'Diciembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm12']),
            "devengado":parseFloat(this.avance_mensual[0]['dv12']),
            "girado":parseFloat(this.avance_mensual[0]['gr12']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
        }
        console.log(data_avance);

        var chart = AmCharts.makeChart("chartdiv", {
          "type": "serial",
          "theme": "light",
          "legend": {
              "equalWidths": false,
              "useGraphSettings": true,
              "valueAlign": "left",
              "valueWidth": 120
          },
          "dataProvider": data_avance,


          "valueAxes": [{
            "id": "dineroAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "Monto en Soles"
        }, {
            "id": "porcentajeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            //"labelsEnabled": false,
            "position": "right",
            "title": "% Ejecución"
        }],

          "graphs": [{
              "alphaField": "alpha",
              "balloonText": "Devengado: [[value]] Soles",
              "dashLengthField": "dashLength",
              "fillAlphas": 3,
              "legendValueText": "[[value]]",
              "title": "Devengado",
              "type": "column",
              "valueField": "devengado",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Compromiso Mensual: [[value]] Soles",
              "bullet": "round",
              "lineThickness":3,
              "lineColor":"#EABC05",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "bulletColor": "#FFFFFF",
              //"bulletSizeField": "townSize",
              "dashLengthField": "dashLength",
              //"descriptionField": "townName",
              "legendValueText": "[[value]]",
              "title": "Comp. Mensual",
              "fillAlphas": 0,
              "valueField": "mensual",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Girado:[[value]] Soles",
              "bullet": "round",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "lineThickness":3,
              "lineColor":"#05BE02",
              //"bulletBorderThickness": 3,
              "dashLengthField": "dashLength",
              "legendValueText": "[[value]]",
              "title": "Girado",
              "fillAlphas": 0,
              "valueField": "girado",
              "valueAxis": "dineroAxis"
          },

          {
            "balloonText": "% Ejecución:[[value]] %",
            "bullet": "square",
            "bulletBorderAlpha": 3,
            "lineThickness":3,
            "lineColor":"#F3290E",
            "bulletBorderThickness": 3,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "% Ejecución",
            "fillAlphas": 0,
            "valueField": "porcentaje",
            "valueAxis": "porcentajeAxis"
        }],

          "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
          "categoryField": "mes",
          "export": {
            "enabled": true
           }
      });

       

      },



      async getGraf_ava_men_fuente_programa(){
        var urlGraf_ava_men='graf_ava_men_fuente_programa/'+this.fte_sel.id+"/"+this.prg_sel.id;
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data
            } catch(e){
              this.errors.push(e)
            }

        var data_avance=[];
        var acum=0;
        if(this.avance_mensual.length > 0){
          acum=parseFloat(this.avance_mensual[0]['dv01']);
          data_avance.push({
            "mes":'Enero',
            "mensual":parseFloat(this.avance_mensual[0]['cm01']),
            "devengado":parseFloat(this.avance_mensual[0]['dv01']),
            "girado":parseFloat(this.avance_mensual[0]['gr01']),
            "porcentaje":parseFloat(acum/parseFloat(this.avance_mensual[0]['pim'])*100).toFixed(2)
          });

          acum+=parseFloat(this.avance_mensual[0]['dv02']);
          data_avance.push({
            "mes":'Febrero',
            "mensual":parseFloat(this.avance_mensual[0]['cm02']),
            "devengado":parseFloat(this.avance_mensual[0]['dv02']),
            "girado":parseFloat(this.avance_mensual[0]['gr02']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv03']);
          data_avance.push({
            "mes":'Marzo',
            "mensual":parseFloat(this.avance_mensual[0]['cm03']),
            "devengado":parseFloat(this.avance_mensual[0]['dv03']),
            "girado":parseFloat(this.avance_mensual[0]['gr03']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv04']);
          data_avance.push({
            "mes":'Abril',
            "mensual":parseFloat(this.avance_mensual[0]['cm04']),
            "devengado":parseFloat(this.avance_mensual[0]['dv04']),
            "girado":parseFloat(this.avance_mensual[0]['gr04']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv05']);
          data_avance.push({
            "mes":'Mayo',
            "mensual":parseFloat(this.avance_mensual[0]['cm05']),
            "devengado":parseFloat(this.avance_mensual[0]['dv05']),
            "girado":parseFloat(this.avance_mensual[0]['gr05']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv06']);
          data_avance.push({
            "mes":'Junio',
            "mensual":parseFloat(this.avance_mensual[0]['cm06']),
            "devengado":parseFloat(this.avance_mensual[0]['dv06']),
            "girado":parseFloat(this.avance_mensual[0]['gr06']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv07']);
          data_avance.push({
            "mes":'Julio',
            "mensual":parseFloat(this.avance_mensual[0]['cm07']),
            "devengado":parseFloat(this.avance_mensual[0]['dv07']),
            "girado":parseFloat(this.avance_mensual[0]['gr07']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv08']);
          data_avance.push({
            "mes":'Agosto',
            "mensual":parseFloat(this.avance_mensual[0]['cm08']),
            "devengado":parseFloat(this.avance_mensual[0]['dv08']),
            "girado":parseFloat(this.avance_mensual[0]['gr08']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv09']);
          data_avance.push({
            "mes":'Setiembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm09']),
            "devengado":parseFloat(this.avance_mensual[0]['dv09']),
            "girado":parseFloat(this.avance_mensual[0]['gr09']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv10']);
          data_avance.push({
            "mes":'Octubre',
            "mensual":parseFloat(this.avance_mensual[0]['cm10']),
            "devengado":parseFloat(this.avance_mensual[0]['dv10']),
            "girado":parseFloat(this.avance_mensual[0]['gr10']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv11']);
          data_avance.push({
            "mes":'Noviembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm11']),
            "devengado":parseFloat(this.avance_mensual[0]['dv11']),
            "girado":parseFloat(this.avance_mensual[0]['gr11']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
          acum+=parseFloat(this.avance_mensual[0]['dv12']);
          data_avance.push({
            "mes":'Diciembre',
            "mensual":parseFloat(this.avance_mensual[0]['cm12']),
            "devengado":parseFloat(this.avance_mensual[0]['dv12']),
            "girado":parseFloat(this.avance_mensual[0]['gr12']),
            "porcentaje":parseFloat((acum/this.avance_mensual[0]['pim'])*100).toFixed(2)
          });
        }
        console.log(data_avance);

        var chart = AmCharts.makeChart("chartdiv", {
          "type": "serial",
          "theme": "light",
          "legend": {
              "equalWidths": false,
              "useGraphSettings": true,
              "valueAlign": "left",
              "valueWidth": 120
          },
          "dataProvider": data_avance,


          "valueAxes": [{
            "id": "dineroAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "title": "Monto en Soles"
        }, {
            "id": "porcentajeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            //"labelsEnabled": false,
            "position": "right",
            "title": "% Ejecución"
        }],

          "graphs": [{
              "alphaField": "alpha",
              "balloonText": "Devengado: [[value]] Soles",
              "dashLengthField": "dashLength",
              "fillAlphas": 3,
              "legendValueText": "[[value]]",
              "title": "Devengado",
              "type": "column",
              "valueField": "devengado",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Compromiso Mensual: [[value]] Soles",
              "bullet": "round",
              "lineThickness":3,
              "lineColor":"#EABC05",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "bulletColor": "#FFFFFF",
              //"bulletSizeField": "townSize",
              "dashLengthField": "dashLength",
              //"descriptionField": "townName",
              "legendValueText": "[[value]]",
              "title": "Comp. Mensual",
              "fillAlphas": 0,
              "valueField": "mensual",
              "valueAxis": "dineroAxis"
          }, {
              "balloonText": "Girado:[[value]] Soles",
              "bullet": "round",
              "bulletBorderAlpha": 3,
              "useLineColorForBulletBorder": true,
              "lineThickness":3,
              "lineColor":"#05BE02",
              //"bulletBorderThickness": 3,
              "dashLengthField": "dashLength",
              "legendValueText": "[[value]]",
              "title": "Girado",
              "fillAlphas": 0,
              "valueField": "girado",
              "valueAxis": "dineroAxis"
          },

          {
            "balloonText": "% Ejecución:[[value]] %",
            "bullet": "square",
            "bulletBorderAlpha": 3,
            "lineThickness":3,
            "lineColor":"#F3290E",
            "bulletBorderThickness": 3,
            "dashLengthField": "dashLength",
            "legendValueText": "[[value]]",
            "title": "% Ejecución",
            "fillAlphas": 0,
            "valueField": "porcentaje",
            "valueAxis": "porcentajeAxis"
        }],

          "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
          "categoryField": "mes",
          "export": {
            "enabled": true
           }
      });

       

      },


      async getPpto_fuente_generica(){
        var urlGraf_ava_men='ppto_fuente_generica/'+this.fte_sel.id+"/"+this.gen_sel.id;
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data;
            this.pagination.totalItems=res.data.length;
            } catch(e){
              this.errors.push(e)
            }
        this.detalle_avance=[];
        for(i=0;i<this.avance_mensual.length;i++)
        {
          this.detalle_avance.push({
            "especifica":this.avance_mensual[i]['nombre_especifica'],
            "pim":this.avance_mensual[i]['pim'],
            "devengado":this.avance_mensual[i]['devengado'],
            "saldo":this.avance_mensual[i]['saldo'],
            "porcentaje":this.avance_mensual[i]['porcentaje']
          })

        }
        

           
      },

      async getPpto_fuente_generica_programa(){
        var urlGraf_ava_men='ppto_fuente_generica_programa/'+this.fte_sel.id+"/"+this.gen_sel.id+"/"+this.prg_sel.id;
        try{
            const res=await axios.get(urlGraf_ava_men)
            this.avance_mensual=res.data;
            this.pagination.totalItems=res.data.length;
            } catch(e){
              this.errors.push(e)
            }
        this.detalle_avance=[];
        for(i=0;i<this.avance_mensual.length;i++)
        {
          this.detalle_avance.push({
            "especifica":this.avance_mensual[i]['nombre_especifica'],
            "pim":this.avance_mensual[i]['pim'],
            "devengado":this.avance_mensual[i]['devengado'],
            "saldo":this.avance_mensual[i]['saldo'],
            "porcentaje":this.avance_mensual[i]['porcentaje']
          })

        }
        

           
      }

    
      
    }
    
  })


