/* =====================
  Global Variables
===================== */
 // for holding data

/* =====================
  Map Setup
===================== */
mapboxgl.accessToken = 'pk.eyJ1IjoieXVxaWxpdSIsImEiOiJjazh1bGlmZmYwMjhpM2RycmU3d29wbDM2In0.SJ3uvZLirKHDLB8-LJ2SDg';
var map = new mapboxgl.Map({
container: 'worldmap',
style: 'mapbox://styles/mapbox/dark-v10',
center: [0,0],
zoom: 1
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//L.mapbox.accessToken = 'pk.eyJ1IjoieXVxaWxpdSIsImEiOiJjazh1bGlmZmYwMjhpM2RycmU3d29wbDM2In0.SJ3uvZLirKHDLB8-LJ2SDg';
//var map = L.mapbox.map('worldmap')
         //.setView([40, -74.50], 9)
  //  .setView([0, 0],2)
  //  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/dark-v10'));

//var secondaryinput; // for holding the result from the filtered data in csv

//read export country
//var exp1996 = $.ajax("https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json");


map.on('load', function() {
// Add a source for the state polygons.
map.addSource('exp1996', {
'type': 'geojson',
'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m1996.json'
});
  map.addLayer({
  'id': 'export-1996',
  'type': 'fill',
  'source': 'exp1996',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
  'fill-color': 'rgba(167, 198, 250, 0.5)',
  'fill-outline-color': 'rgba(167, 198, 250, 1)'
  }
  });

map.addSource('exp1997', {
'type': 'geojson',
'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m1997.json'
});
  map.addLayer({
  'id': 'export-1997',
  'type': 'fill',
  'source': 'exp1997',
  'layout': {
    'visibility': 'none'
  },
  'paint': {
  'fill-color': 'rgba(167, 198, 250, 0.5)',
  'fill-outline-color': 'rgba(167, 198, 250, 1)'
  }
  });

map.addSource('exp1998', {
  'type': 'geojson',
  'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m1998.json'
  });
    map.addLayer({
    'id': 'export-1998',
    'type': 'fill',
    'source': 'exp1998',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
    'fill-color': 'rgba(167, 198, 250, 0.5)',
    'fill-outline-color': 'rgba(167, 198, 250, 1)'
    }
    });

map.addSource('exp1999', {
    'type': 'geojson',
    'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m1999.json'
    });
    map.addLayer({
      'id': 'export-1999',
      'type': 'fill',
      'source': 'exp1999',
      'layout': {
        'visibility': 'none'
      },
      'paint': {
      'fill-color': 'rgba(167, 198, 250, 0.5)',
      'fill-outline-color': 'rgba(167, 198, 250, 1)'
      }
      });

map.addSource('exp2000', {
      'type': 'geojson',
      'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2000.json'
      });
    map.addLayer({
        'id': 'export-2000',
        'type': 'fill',
        'source': 'exp2000',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
        'fill-color': 'rgba(167, 198, 250, 0.5)',
        'fill-outline-color': 'rgba(167, 198, 250, 1)'
        }
        });

map.addSource('exp2001', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2001.json'
        });
   map.addLayer({
          'id': 'export-2001',
          'type': 'fill',
          'source': 'exp2001',
          'layout': {
            'visibility': 'none'
          },
          'paint': {
          'fill-color': 'rgba(167, 198, 250, 0.5)',
          'fill-outline-color': 'rgba(167, 198, 250, 1)'
          }
          });

map.addSource('exp2002', {
          'type': 'geojson',
          'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2002.json'
          });
   map.addLayer({
            'id': 'export-2002',
            'type': 'fill',
            'source': 'exp2002',
            'layout': {
              'visibility': 'none'
            },
            'paint': {
            'fill-color': 'rgba(167, 198, 250, 0.5)',
            'fill-outline-color': 'rgba(167, 198, 250, 1)'
            }
            });

map.addSource('exp2003', {
            'type': 'geojson',
            'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2003.json'
            });
   map.addLayer({
              'id': 'export-2003',
              'type': 'fill',
              'source': 'exp2003',
              'layout': {
                'visibility': 'none'
              },
              'paint': {
              'fill-color': 'rgba(167, 198, 250, 0.5)',
              'fill-outline-color': 'rgba(167, 198, 250, 1)'
              }
              });

map.addSource('exp2004', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2004.json'
              });
  map.addLayer({
                'id': 'export-2004',
                'type': 'fill',
                'source': 'exp2004',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2005', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2005.json'
              });
  map.addLayer({
                'id': 'export-2005',
                'type': 'fill',
                'source': 'exp2005',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2006', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2006.json'
              });
  map.addLayer({
                'id': 'export-2006',
                'type': 'fill',
                'source': 'exp2006',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2007', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2007.json'
              });
  map.addLayer({
                'id': 'export-2007',
                'type': 'fill',
                'source': 'exp2007',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2008', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2008.json'
              });
  map.addLayer({
                'id': 'export-2008',
                'type': 'fill',
                'source': 'exp2008',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2009', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2009.json'
              });
  map.addLayer({
                'id': 'export-2009',
                'type': 'fill',
                'source': 'exp2009',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2010', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2010.json'
              });
  map.addLayer({
                'id': 'export-2010',
                'type': 'fill',
                'source': 'exp2010',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2011', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2011.json'
              });
  map.addLayer({
                'id': 'export-2011',
                'type': 'fill',
                'source': 'exp2011',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2012', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2012.json'
              });
  map.addLayer({
                'id': 'export-2012',
                'type': 'fill',
                'source': 'exp2012',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2013', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2013.json'
              });
  map.addLayer({
                'id': 'export-2013',
                'type': 'fill',
                'source': 'exp2013',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2014', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2014.json'
              });
  map.addLayer({
                'id': 'export-2014',
                'type': 'fill',
                'source': 'exp2014',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2015', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2015.json'
              });
  map.addLayer({
                'id': 'export-2015',
                'type': 'fill',
                'source': 'exp2015',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2016', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2016.json'
              });
  map.addLayer({
                'id': 'export-2016',
                'type': 'fill',
                'source': 'exp2016',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('exp2017', {
              'type': 'geojson',
              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/m2017.json'
              });
  map.addLayer({
                'id': 'export-2017',
                'type': 'fill',
                'source': 'exp2017',
                'layout': {
                  'visibility': 'none'
                },
                'paint': {
                'fill-color': 'rgba(167, 198, 250, 0.5)',
                'fill-outline-color': 'rgba(167, 198, 250, 1)'
                }
                });

map.addSource('imp1996', {
                                'type': 'geojson',
                                'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n1996.json'
                                });
    map.addLayer({
                                  'id': 'import-1996',
                                  'type': 'fill',
                                  'source': 'imp1996',
                                  'layout': {
                                    'visibility': 'none'
                                  },
                                  'paint': {
                                  'fill-color': 'rgba(255,219,201, 0.5)',
                                  'fill-outline-color': 'rgba(255,219,201, 1)'
                                  }
                                  });

map.addSource('imp1997', {
                                'type': 'geojson',
                                'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n1997.json'
                                });
     map.addLayer({
                                  'id': 'import-1997',
                                  'type': 'fill',
                                  'source': 'imp1997',
                                  'layout': {
                                    'visibility': 'none'
                                  },
                                  'paint': {
                                  'fill-color': 'rgba(255,219,201, 0.5)',
                                  'fill-outline-color': 'rgba(255,219,201, 1)'
                                  }
                                  });

map.addSource('imp1998', {
                                  'type': 'geojson',
                                  'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n1998.json'
                                  });
    map.addLayer({
                                    'id': 'import-1998',
                                    'type': 'fill',
                                    'source': 'imp1998',
                                    'layout': {
                                      'visibility': 'none'
                                    },
                                    'paint': {
                                    'fill-color': 'rgba(255,219,201, 0.5)',
                                    'fill-outline-color': 'rgba(255,219,201, 1)'
                                    }
                                    });

map.addSource('imp1999', {
                                    'type': 'geojson',
                                    'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n1999.json'
                                    });
    map.addLayer({
                                      'id': 'import-1999',
                                      'type': 'fill',
                                      'source': 'imp1999',
                                      'layout': {
                                        'visibility': 'none'
                                      },
                                      'paint': {
                                      'fill-color': 'rgba(255,219,201, 0.5)',
                                      'fill-outline-color': 'rgba(255,219,201, 1)'
                                      }
                                      });

map.addSource('imp2000', {
                                      'type': 'geojson',
                                      'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2000.json'
                                      });
    map.addLayer({
                                        'id': 'import-2000',
                                        'type': 'fill',
                                        'source': 'imp2000',
                                        'layout': {
                                          'visibility': 'none'
                                        },
                                        'paint': {
                                        'fill-color': 'rgba(255,219,201, 0.5)',
                                        'fill-outline-color': 'rgba(255,219,201, 1)'
                                        }
                                        });

map.addSource('imp2001', {
                                        'type': 'geojson',
                                        'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2001.json'
                                        });
    map.addLayer({
                                          'id': 'import-2001',
                                          'type': 'fill',
                                          'source': 'imp2001',
                                          'layout': {
                                            'visibility': 'none'
                                          },
                                          'paint': {
                                          'fill-color': 'rgba(255,219,201, 0.5)',
                                          'fill-outline-color': 'rgba(255,219,201, 1)'
                                          }
                                          });

map.addSource('imp2002', {
                                          'type': 'geojson',
                                          'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2002.json'
                                          });
    map.addLayer({
                                            'id': 'import-2002',
                                            'type': 'fill',
                                            'source': 'imp2002',
                                            'layout': {
                                              'visibility': 'none'
                                            },
                                            'paint': {
                                            'fill-color': 'rgba(255,219,201, 0.5)',
                                            'fill-outline-color': 'rgba(255,219,201, 1)'
                                            }
                                            });

map.addSource('imp2003', {
                                            'type': 'geojson',
                                            'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2003.json'
                                            });
  map.addLayer({
                                              'id': 'import-2003',
                                              'type': 'fill',
                                              'source': 'imp2003',
                                              'layout': {
                                                'visibility': 'none'
                                              },
                                              'paint': {
                                              'fill-color': 'rgba(255,219,201, 0.5)',
                                              'fill-outline-color': 'rgba(255,219,201, 1)'
                                              }
                                              });

map.addSource('imp2004', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2004.json'
                                              });
  map.addLayer({
                                                'id': 'import-2004',
                                                'type': 'fill',
                                                'source': 'imp2004',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2005', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2005.json'
                                              });
  map.addLayer({
                                                'id': 'import-2005',
                                                'type': 'fill',
                                                'source': 'imp2005',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2006', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2006.json'
                                              });
  map.addLayer({
                                                'id': 'import-2006',
                                                'type': 'fill',
                                                'source': 'imp2006',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2007', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2007.json'
                                              });
  map.addLayer({
                                                'id': 'import-2007',
                                                'type': 'fill',
                                                'source': 'imp2007',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2008', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2008.json'
                                              });
  map.addLayer({
                                                'id': 'import-2008',
                                                'type': 'fill',
                                                'source': 'imp2008',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2009', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2009.json'
                                              });
    map.addLayer({
                                                'id': 'import-2009',
                                                'type': 'fill',
                                                'source': 'imp2009',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2010', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2010.json'
                                              });
    map.addLayer({
                                                'id': 'import-2010',
                                                'type': 'fill',
                                                'source': 'imp2010',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2011', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2011.json'
                                              });
    map.addLayer({
                                                'id': 'import-2011',
                                                'type': 'fill',
                                                'source': 'imp2011',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2012', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2012.json'
                                              });
    map.addLayer({
                                                'id': 'import-2012',
                                                'type': 'fill',
                                                'source': 'imp2012',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2013', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2013.json'
                                              });
    map.addLayer({
                                                'id': 'import-2013',
                                                'type': 'fill',
                                                'source': 'imp2013',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2014', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2014.json'
                                              });
    map.addLayer({
                                                'id': 'import-2014',
                                                'type': 'fill',
                                                'source': 'imp2014',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2015', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2015.json'
                                              });
    map.addLayer({
                                                'id': 'import-2015',
                                                'type': 'fill',
                                                'source': 'imp2015',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2016', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2016.json'
                                              });
    map.addLayer({
                                                'id': 'import-2016',
                                                'type': 'fill',
                                                'source': 'imp2016',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

map.addSource('imp2017', {
                                              'type': 'geojson',
                                              'data': 'https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/country_dataset/n2017.json'
                                              });
    map.addLayer({
                                                'id': 'import-2017',
                                                'type': 'fill',
                                                'source': 'imp2017',
                                                'layout': {
                                                  'visibility': 'none'
                                                },
                                                'paint': {
                                                'fill-color': 'rgba(255,219,201, 0.5)',
                                                'fill-outline-color': 'rgba(255,219,201, 1)'
                                                }
                                                });

});





var toggleLayerIdsE = ['export-1996','export-1997','export-1998','export-1999','export-2000','export-2001',
'export-2002','export-2003','export-2004','export-2005','export-2006','export-2007','export-2008','export-2009',
'export-2010','export-2011','export-2012','export-2013','export-2014','export-2015','export-2016','export-2017'];
var toggleLayerIdsI = ['import-1996','import-1997','import-1998','import-1999','import-2000','import-2001',
'import-2002','import-2003','import-2004','import-2005','import-2006','import-2007','import-2008','import-2009',
'import-2010','import-2011','import-2012','import-2013','import-2014','import-2015','import-2016','import-2017'];
var toggleLayerAll = toggleLayerIdsE.concat(toggleLayerIdsI);



//first use "search" icon to turn off all toggleLayer
var linkAll = document.getElementById("go");
linkAll.href = "#";
linkAll.className = 'active';

//have search button remove all existing layer (currently still exploring)
//$('#go').click(linkAll, function(e){
//  for (j = 0; j< toggleLayerAll.length; j++){
//    e.preventDefault();
//    e.stopPropagation();
//    var visibilityAll = map.getLayoutProperty(toggleLayerAll[i],'visibility');
//    if(visibilityAll === 'visible'){linkAll.className = '';
//  map.setLayoutProperty(toggleLayerAll[i], 'visibility', 'none');}
//  }
//});


// allow export and import country to display when click the map button
var linkE = document.getElementById("map-E");
linkE.href = "#";
linkE.className = 'active';

$('#map-E').click(linkE, function(e){
  for (j = 0; j< toggleLayerAll.length; j++){
    e.preventDefault();
    e.stopPropagation();
    var visibilityAll = map.getLayoutProperty(toggleLayerAll[j],'visibility');
    if(visibilityAll === 'visible'){
      map.setLayoutProperty(toggleLayerAll[j], 'visibility', 'none');
      this.className = '';}
  }
  for (i=0; i< toggleLayerIdsE.length; i++){
    e.preventDefault();
    e.stopPropagation();
    var visibilityE = map.getLayoutProperty(toggleLayerIdsE[i], 'visibility');
    var input = document.getElementById("input").value;

  if (input == "1996"){
        map.setLayoutProperty(toggleLayerIdsE[0] , 'visibility', 'visible');
        this.className = 'active';
      } else if (input == "1997") {
           map.setLayoutProperty(toggleLayerIdsE[1] , 'visibility', 'visible');
           this.className = 'active';
          } else if (input == "1998") {
               map.setLayoutProperty(toggleLayerIdsE[2] , 'visibility', 'visible');
               this.className = 'active';
              }else if (input == "1999") {
                   map.setLayoutProperty(toggleLayerIdsE[3] , 'visibility', 'visible');
                   this.className = 'active';
                  }else if (input == "2000") {
                       map.setLayoutProperty(toggleLayerIdsE[4] , 'visibility', 'visible');
                       this.className = 'active';
                      }else if (input == "2001") {
                           map.setLayoutProperty(toggleLayerIdsE[5] , 'visibility', 'visible');
                           this.className = 'active';
                          }else if (input == "2002") {
                               map.setLayoutProperty(toggleLayerIdsE[6] , 'visibility', 'visible');
                               this.className = 'active';
                              }else if (input == "2003") {
                                   map.setLayoutProperty(toggleLayerIdsE[7] , 'visibility', 'visible');
                                   this.className = 'active';
                                  }else if (input == "2004") {
                                       map.setLayoutProperty(toggleLayerIdsE[8] , 'visibility', 'visible');
                                       this.className = 'active';
                                      }else if (input == "2005") {
                                           map.setLayoutProperty(toggleLayerIdsE[9] , 'visibility', 'visible');
                                           this.className = 'active';
                                          }else if (input == "2006") {
                                               map.setLayoutProperty(toggleLayerIdsE[10] , 'visibility', 'visible');
                                               this.className = 'active';
                                              }else if (input == "2007") {
                                                   map.setLayoutProperty(toggleLayerIdsE[11] , 'visibility', 'visible');
                                                   this.className = 'active';
                                                  }else if (input == "2008") {
                                                       map.setLayoutProperty(toggleLayerIdsE[12] , 'visibility', 'visible');
                                                       this.className = 'active';
                                                      }else if (input == "2009") {
                                                           map.setLayoutProperty(toggleLayerIdsE[13] , 'visibility', 'visible');
                                                           this.className = 'active';
                                                          }else if (input == "2010") {
                                                               map.setLayoutProperty(toggleLayerIdsE[14] , 'visibility', 'visible');
                                                               this.className = 'active';
                                                              }else if (input == "2011") {
                                                                   map.setLayoutProperty(toggleLayerIdsE[15] , 'visibility', 'visible');
                                                                   this.className = 'active';
                                                                  }else if (input == "2012") {
                                                                       map.setLayoutProperty(toggleLayerIdsE[16] , 'visibility', 'visible');
                                                                       this.className = 'active';
                                                                      }else if (input == "2013") {
                                                                           map.setLayoutProperty(toggleLayerIdsE[17] , 'visibility', 'visible');
                                                                           this.className = 'active';
                                                                          }else if (input == "2014") {
                                                                               map.setLayoutProperty(toggleLayerIdsE[18] , 'visibility', 'visible');
                                                                               this.className = 'active';
                                                                              }else if (input == "2015") {
                                                                                   map.setLayoutProperty(toggleLayerIdsE[19] , 'visibility', 'visible');
                                                                                   this.className = 'active';
                                                                                  }else if (input == "2016") {
                                                                                       map.setLayoutProperty(toggleLayerIdsE[20] , 'visibility', 'visible');
                                                                                       this.className = 'active';
                                                                                      }else if (input == "2017") {
                                                                                           map.setLayoutProperty(toggleLayerIdsE[21] , 'visibility', 'visible');
                                                                                           this.className = 'active';
                                                                                          }else {
            map.setLayoutProperty(toggleLayerIdsE[i], 'visibility', 'none');
            this.className = '';}
}
linkE.appendChild(linkE);
});

var linkI = document.getElementById("map-I");
linkI.href = "#";
linkI.className = 'active';

$('#map-I').click(linkI, function(e){
  for (j = 0; j< toggleLayerAll.length; j++){
    e.preventDefault();
    e.stopPropagation();
    var visibilityAll = map.getLayoutProperty(toggleLayerAll[j],'visibility');
    if(visibilityAll === 'visible'){
      map.setLayoutProperty(toggleLayerAll[j], 'visibility', 'none');
      this.className = '';}
  }
  for (i=0; i< toggleLayerIdsI.length; i++){
    e.preventDefault();
    e.stopPropagation();
    var visibilityE = map.getLayoutProperty(toggleLayerIdsI[i], 'visibility');
    var input = document.getElementById("input").value;

  if (input == "1996"){
        map.setLayoutProperty(toggleLayerIdsI[0] , 'visibility', 'visible');
        this.className = 'active';
      } else if (input == "1997") {
           map.setLayoutProperty(toggleLayerIdsI[1] , 'visibility', 'visible');
           this.className = 'active';
          } else if (input == "1998") {
               map.setLayoutProperty(toggleLayerIdsI[2] , 'visibility', 'visible');
               this.className = 'active';
              }else if (input == "1999") {
                   map.setLayoutProperty(toggleLayerIdsI[3] , 'visibility', 'visible');
                   this.className = 'active';
                  }else if (input == "2000") {
                       map.setLayoutProperty(toggleLayerIdsI[4] , 'visibility', 'visible');
                       this.className = 'active';
                      }else if (input == "2001") {
                           map.setLayoutProperty(toggleLayerIdsI[5] , 'visibility', 'visible');
                           this.className = 'active';
                          }else if (input == "2002") {
                               map.setLayoutProperty(toggleLayerIdsI[6] , 'visibility', 'visible');
                               this.className = 'active';
                              }else if (input == "2003") {
                                   map.setLayoutProperty(toggleLayerIdsI[7] , 'visibility', 'visible');
                                   this.className = 'active';
                                  }else if (input == "2004") {
                                       map.setLayoutProperty(toggleLayerIdsI[8] , 'visibility', 'visible');
                                       this.className = 'active';
                                      }else if (input == "2005") {
                                           map.setLayoutProperty(toggleLayerIdsI[9] , 'visibility', 'visible');
                                           this.className = 'active';
                                          }else if (input == "2006") {
                                               map.setLayoutProperty(toggleLayerIdsI[10] , 'visibility', 'visible');
                                               this.className = 'active';
                                              }else if (input == "2007") {
                                                   map.setLayoutProperty(toggleLayerIdsI[11] , 'visibility', 'visible');
                                                   this.className = 'active';
                                                  }else if (input == "2008") {
                                                       map.setLayoutProperty(toggleLayerIdsI[12] , 'visibility', 'visible');
                                                       this.className = 'active';
                                                      }else if (input == "2009") {
                                                           map.setLayoutProperty(toggleLayerIdsI[13] , 'visibility', 'visible');
                                                           this.className = 'active';
                                                          }else if (input == "2010") {
                                                               map.setLayoutProperty(toggleLayerIdsI[14] , 'visibility', 'visible');
                                                               this.className = 'active';
                                                              }else if (input == "2011") {
                                                                   map.setLayoutProperty(toggleLayerIdsI[15] , 'visibility', 'visible');
                                                                   this.className = 'active';
                                                                  }else if (input == "2012") {
                                                                       map.setLayoutProperty(toggleLayerIdsI[16] , 'visibility', 'visible');
                                                                       this.className = 'active';
                                                                      }else if (input == "2013") {
                                                                           map.setLayoutProperty(toggleLayerIdsI[17] , 'visibility', 'visible');
                                                                           this.className = 'active';
                                                                          }else if (input == "2014") {
                                                                               map.setLayoutProperty(toggleLayerIdsI[18] , 'visibility', 'visible');
                                                                               this.className = 'active';
                                                                              }else if (input == "2015") {
                                                                                   map.setLayoutProperty(toggleLayerIdsI[19] , 'visibility', 'visible');
                                                                                   this.className = 'active';
                                                                                  }else if (input == "2016") {
                                                                                       map.setLayoutProperty(toggleLayerIdsI[20] , 'visibility', 'visible');
                                                                                       this.className = 'active';
                                                                                      }else if (input == "2017") {
                                                                                           map.setLayoutProperty(toggleLayerIdsI[21] , 'visibility', 'visible');
                                                                                           this.className = 'active';
                                                                                          }else {
            map.setLayoutProperty(toggleLayerIdsI[i], 'visibility', 'none');
            this.className = '';}
}
linkI.appendChild(linkI);
});




// same click event on multiple elements;
// location of the click, with description HTML from its properties.
map.on('click', 'export-2017', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2017', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2017', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2016', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2016', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2016', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2015', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2015', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2015', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2014', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2014', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2014', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2013', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2013', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2013', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2012', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2012', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2012', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2011', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2011', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2011', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2010', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2010', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2010', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2009', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2009', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2009', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2008', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2008', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2008', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2007', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2007', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2007', function() {
map.getCanvas().style.cursor = '';
});



map.on('click', 'export-2006', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2006', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2006', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2005', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2005', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2005', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2004', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2004', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2004', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2003', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2003', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2003', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2002', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2002', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2002', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2001', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2001', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2001', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-2000', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-2000', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-2000', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-1999', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-1999', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-1999', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-1998', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-1998', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-1998', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-1997', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-1997', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-1997', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'export-1996', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.expName + ' exported '+ p.expVmusd + ' Million USD of ' + p.expWmkg + ' Million kg ' + 'plastic scraps to the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'export-1996', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'export-1996', function() {
map.getCanvas().style.cursor = '';
});







// location of the click, with description HTML from its properties.
map.on('click', 'import-2017', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2017', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2017', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2016', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2016', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2016', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2015', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2015', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2015', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2014', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2014', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2014', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2013', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2013', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2013', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2012', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2012', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2012', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2011', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2011', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2011', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2010', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2010', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2010', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2009', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2009', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2009', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2008', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2008', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2008', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2007', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2007', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2007', function() {
map.getCanvas().style.cursor = '';
});



map.on('click', 'import-2006', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2006', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2006', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2005', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2005', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2005', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2004', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2004', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2004', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2003', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2003', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2003', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2002', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2002', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2002', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2001', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2001', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2001', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-2000', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-2000', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-2000', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-1999', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-1999', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-1999', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-1998', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-1998', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-1998', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-1997', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-1997', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-1997', function() {
map.getCanvas().style.cursor = '';
});


map.on('click', 'import-1996', function(e) {
  var p = e.features[0].properties;
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('In '+ p.Year + ', ' + p.impName + ' imported '+ p.impVmsd + ' Million USD of ' + p.impWmkg + ' Million kg ' + 'plastic scraps from the world. (UN Comtrade Data)')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'import-1996', function() {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'import-1996', function() {
map.getCanvas().style.cursor = '';
});
