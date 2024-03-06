ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4026").setExtent([182535.842233, 334812.402253, 197068.948639, 342393.184783]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Acces_Pod_Cosauti_2024_Variante_1_modificat_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Acces_Pod_Cosauti_2024_Variante_1_modificat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Acces_Pod_Cosauti_2024_Variante_1_modificat_1.png",
    attributions: ' ',
                                projection: 'EPSG:4026',
                                alwaysInRange: true,
                                imageExtent: [188021.119811, 335955.224391, 193169.547199, 343175.017277]
                            })
                        });
var format_CONDUCTAGAZRublenia_Cosui_2 = new ol.format.GeoJSON();
var features_CONDUCTAGAZRublenia_Cosui_2 = format_CONDUCTAGAZRublenia_Cosui_2.readFeatures(json_CONDUCTAGAZRublenia_Cosui_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_CONDUCTAGAZRublenia_Cosui_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDUCTAGAZRublenia_Cosui_2.addFeatures(features_CONDUCTAGAZRublenia_Cosui_2);
var lyr_CONDUCTAGAZRublenia_Cosui_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONDUCTAGAZRublenia_Cosui_2, 
                style: style_CONDUCTAGAZRublenia_Cosui_2,
                popuplayertitle: "CONDUCTA GAZ Rublenița_Cosăuți",
                interactive: true,
                title: '<img src="styles/legend/CONDUCTAGAZRublenia_Cosui_2.png" /> CONDUCTA GAZ Rublenița_Cosăuți'
            });
var format_FibraOpticaMoldcell_3 = new ol.format.GeoJSON();
var features_FibraOpticaMoldcell_3 = format_FibraOpticaMoldcell_3.readFeatures(json_FibraOpticaMoldcell_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_FibraOpticaMoldcell_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibraOpticaMoldcell_3.addFeatures(features_FibraOpticaMoldcell_3);
var lyr_FibraOpticaMoldcell_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FibraOpticaMoldcell_3, 
                style: style_FibraOpticaMoldcell_3,
                popuplayertitle: "Fibra Optica Moldcell",
                interactive: true,
                title: '<img src="styles/legend/FibraOpticaMoldcell_3.png" /> Fibra Optica Moldcell'
            });
var format_FibraOpticaOrange_4 = new ol.format.GeoJSON();
var features_FibraOpticaOrange_4 = format_FibraOpticaOrange_4.readFeatures(json_FibraOpticaOrange_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_FibraOpticaOrange_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibraOpticaOrange_4.addFeatures(features_FibraOpticaOrange_4);
var lyr_FibraOpticaOrange_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FibraOpticaOrange_4, 
                style: style_FibraOpticaOrange_4,
                popuplayertitle: "Fibra Optica Orange",
                interactive: true,
                title: '<img src="styles/legend/FibraOpticaOrange_4.png" /> Fibra Optica Orange'
            });
var format_Drumproiectat_5 = new ol.format.GeoJSON();
var features_Drumproiectat_5 = format_Drumproiectat_5.readFeatures(json_Drumproiectat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_Drumproiectat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drumproiectat_5.addFeatures(features_Drumproiectat_5);
var lyr_Drumproiectat_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drumproiectat_5, 
                style: style_Drumproiectat_5,
                popuplayertitle: "Drum proiectat",
                interactive: true,
                title: '<img src="styles/legend/Drumproiectat_5.png" /> Drum proiectat'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Acces_Pod_Cosauti_2024_Variante_1_modificat_1.setVisible(true);lyr_CONDUCTAGAZRublenia_Cosui_2.setVisible(true);lyr_FibraOpticaMoldcell_3.setVisible(true);lyr_FibraOpticaOrange_4.setVisible(true);lyr_Drumproiectat_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Acces_Pod_Cosauti_2024_Variante_1_modificat_1,lyr_CONDUCTAGAZRublenia_Cosui_2,lyr_FibraOpticaMoldcell_3,lyr_FibraOpticaOrange_4,lyr_Drumproiectat_5];
lyr_CONDUCTAGAZRublenia_Cosui_2.set('fieldAliases', {'id': 'id', });
lyr_FibraOpticaMoldcell_3.set('fieldAliases', {'id': 'id', });
lyr_FibraOpticaOrange_4.set('fieldAliases', {'id': 'id', });
lyr_Drumproiectat_5.set('fieldAliases', {'id': 'id', });
lyr_CONDUCTAGAZRublenia_Cosui_2.set('fieldImages', {'id': 'TextEdit', });
lyr_FibraOpticaMoldcell_3.set('fieldImages', {'id': 'TextEdit', });
lyr_FibraOpticaOrange_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Drumproiectat_5.set('fieldImages', {'id': 'TextEdit', });
lyr_CONDUCTAGAZRublenia_Cosui_2.set('fieldLabels', {'id': 'no label', });
lyr_FibraOpticaMoldcell_3.set('fieldLabels', {'id': 'no label', });
lyr_FibraOpticaOrange_4.set('fieldLabels', {'id': 'no label', });
lyr_Drumproiectat_5.set('fieldLabels', {'id': 'no label', });
lyr_Drumproiectat_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});