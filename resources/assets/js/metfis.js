  new Vue({
    el: '#metfis',
    created:function(){
    this.getMicrored();
    },
    data:{
      search:'',
      selected:[],
      mic_sel:'',
      prg_sel:'',
      prd_sel:'',
      sub_sel:'',
      yea_sel:'',
      fase_sel:'',
      nom_prg:'',
      trazador:'',
      programa:[],
      producto:[],
      subproducto:[],
      metas_sub_micro:[],
      metas_prd_micro:[],
      metas_producto:[],
      metas_subproducto:[],
      metas_sub_eess:[],
      metas_prd_eess:[],
      microred: [],
      years:[
        {"cod":2018,"des":"2018"},
        {"cod":2017,"des":"2017"},
        {"cod":2016,"des":"2016"},
        {"cod":2015,"des":"2015"},
        {"cod":2014,"des":"2014"},
        {"cod":2013,"des":"2013"},
        {"cod":2012,"des":"2012"}
      ],
      fases:[
        {"cod":1,"des":"Requerido"},
        {"cod":2,"des":"Ante Proyecto"},
        {"cod":5,"des":"Aprobado"},
        {"cod":0,"des":"Independiente de la Fase"},
      ],
      headers_micro: [
        { text: 'Micro Red', value: 'nom_microred' },
        { text: 'Fase Requerido', value: 'requerido' },
        { text: 'Fase Anteproyecto', value: 'anteproyecto' },
        { text: 'Fase Aprobado', value: 'aprobado' },
        { text: 'Independiente de la Fase', value: 'independiente' }
      ],

      headers_eess: [
        { text: 'Establecimiento', value: 'nom_eess' },
        { text: 'Fase Requerido', value: 'requerido' },
        { text: 'Fase Anteproyecto', value: 'anteproyecto' },
        { text: 'Fase Aprobado', value: 'aprobado' },
        { text: 'Independiente de la Fase', value: 'independiente' }
      ],

      //pagination: {rowsPerPage:10},
      errors:[]
    },
    methods:{
      getPrograma:function(){
        var urlPrograma='programa/'+this.yea_sel.id;
        axios.get(urlPrograma).then(response=>{
          this.programa=response.data
        });
      },

      getProducto:function(){
        var urlProducto='producto/'+this.yea_sel.id+'/'+this.prg_sel.id;
        axios.get(urlProducto).then(response=>{
          this.producto=response.data
        });
      },

      getSubproducto(){
        if(this.trazador==true){
          var urlSubproducto='subproducto/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/1';
        }
        else{
          var urlSubproducto='subproducto/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/0';
        }
        axios.get(urlSubproducto).then(response=>{
          this.subproducto=response.data
        });
      },

      getMetas_sub_micro(){
        if(this.trazador==true){
          var urlMetas_micro='metas_sub_micro/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/'+this.sub_sel.id+'/1';
        }
        else{
          var urlMetas_micro='metas_sub_micro/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/'+this.sub_sel.id+'/0';
        }
        axios.get(urlMetas_micro).then(response=>{
          this.metas_sub_micro=response.data
        });
      },

      getMetas_prd_micro(){
        if(this.trazador==true){
          var urlMetas_micro='metas_prd_micro/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/1';
        }
        else{
          var urlMetas_micro='metas_prd_micro/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/0';
        }
        axios.get(urlMetas_micro).then(response=>{
          this.metas_prd_micro=response.data
        });
      },

      getMetas_sub_eess(){
        if(this.trazador==true){
          var urlMetas_eess='metas_sub_eess/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+"/"+this.sub_sel.id+"/"+this.mic_sel.id+'/1';
        }
        else{
          var urlMetas_eess='metas_sub_eess/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+"/"+this.sub_sel.id+"/"+this.mic_sel.id+'/0';
        }
        axios.get(urlMetas_eess).then(response=>{
          this.metas_sub_eess=response.data
        });
      },

      getMetas_prd_eess(){
        if(this.trazador==true){
          var urlMetas_eess='metas_prd_eess/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+"/"+this.mic_sel.id+'/1';
        }
        else{
          var urlMetas_eess='metas_prd_eess/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+"/"+this.mic_sel.id+'/0';
        }
        axios.get(urlMetas_eess).then(response=>{
          this.metas_prd_eess=response.data
        });
      },


      getMicrored:function(){
        var urlMicrored='micro_red';
        axios.get(urlMicrored).then(response=>{
          this.microred=response.data
        });
      },

      async getMetas_producto(){
        if(this.trazador==true){
          var urlMetas_producto='metas_producto/'+this.prg_sel.id+'/'+this.yea_sel.id+'/1'+'/'+this.fase_sel.id;
        }
        else{
          var urlMetas_producto='metas_producto/'+this.prg_sel.id+'/'+this.yea_sel.id+'/0'+'/'+this.fase_sel.id;
        }
        
        try{
            const res=await axios.get(urlMetas_producto)
            this.metas_producto=res.data
            } catch(e){
              this.errors.push(e)
            }
        var chart=new AmCharts.AmSerialChart();
        chart.dataProvider=this.metas_producto;
        chart.categoryField="nom_producto";
        chart.angle=30;
        chart.depth3D=15;
        chart.rotate=true;
        chart.export=true;
        chart.theme="light";
        chart.marginLeft=400;
        chart.startDuration = 1;
        chart.plotAreaFillAlphas = 2;
        chart.fontSize = 12;
        chart.creditsPosition = "bottom-right";

        var graph=new AmCharts.AmGraph();
        graph.valueField="meta";
        graph.type="column";
        graph.fillAlphas=0.8;
        graph.balloonText="[[category]]:<b>[[value]]</b>";
        graph.labelText="[[value]]";
        graph.lineAlpha = 2;
        graph.lineColor = "#4AB9F8";
        graph.topRadius=1;

        var ejex=chart.categoryAxis;
        ejex.ignoreAxisWidth=true;
        ejex.autoWrap=true;

        chart.addGraph(graph);
        chart.write("chartdiv");

      },


      async getMetas_subproducto(){
        if(this.trazador==true){
          var urlMetas_subproducto='metas_subproducto/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/1'+'/'+this.fase_sel.id;
        }
        else{
          var urlMetas_subproducto='metas_subproducto/'+this.yea_sel.id+'/'+this.prg_sel.id+'/'+this.prd_sel.id+'/0'+'/'+this.fase_sel.id;
        }
        
        try{
            const res=await axios.get(urlMetas_subproducto)
            this.metas_subproducto=res.data
            } catch(e){
              this.errors.push(e)
            }
        var chart=new AmCharts.AmSerialChart();
        chart.dataProvider=this.metas_subproducto;
        chart.categoryField="nom_subproducto";
        chart.angle=30;
        chart.depth3D=15;
        chart.rotate=true;
        chart.export=true;
        chart.theme="light";
        chart.marginLeft=400;
        chart.startDuration = 1;
        chart.plotAreaFillAlphas = 2;
        chart.fontSize = 12;
        chart.creditsPosition = "bottom-right";

        var graph=new AmCharts.AmGraph();
        graph.valueField="meta";
        graph.type="column";
        graph.fillAlphas=0.8;
        graph.balloonText="[[category]]:<b>[[value]]</b>";
        graph.labelText="[[value]]";
        graph.lineAlpha = 2;
        graph.lineColor = "#4AB9F8";
        graph.topRadius=1;

        var ejex=chart.categoryAxis;
        ejex.ignoreAxisWidth=true;
        ejex.autoWrap=true;

        chart.addGraph(graph);
        chart.write("chartdiv");

      }




      
    }
  })


