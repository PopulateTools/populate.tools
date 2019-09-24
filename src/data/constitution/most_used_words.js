const mostUsedWords = [
  {
    value: 'Ley',
    checked: false,
    indicator: 20
  },
  {
    value: 'Gobierno',
    checked: false,
    indicator: 19
  },
  {
    value: 'Derecho',
    checked: false,
    indicator: 17
  },
  {
    value: 'Generales',
    checked: false,
    indicator: 16
  },
  {
    value: 'Constitución',
    checked: false,
    indicator: 15
  },
  {
    value: 'Comunidades',
    checked: false,
    indicator: 14
  },
  {
    value: 'Autónomas',
    checked: false,
    indicator: 13
  },
  {
    value: 'Congreso',
    checked: false,
    indicator: 12
  },
  {
    value: 'Miembros',
    checked: false,
    indicator: 11
  },
  {
    value: 'Derechos',
    checked: false,
    indicator: 10
  },
  {
    value: 'Públicos',
    checked: false,
    indicator: 9
  },
  {
    value: 'Cortes',
    checked: false,
    indicator: 7
  },
  {
    value: 'Mayoría',
    checked: false,
    indicator: 7
  },
  {
    value: 'Ejercicio',
    checked: false,
    indicator: 7
  },
  {
    value: 'Mediante',
    checked: false,
    indicator: 7
  },
  {
    value: 'Rey',
    checked: false,
    indicator: 7
  },
  {
    value: 'Cámaras',
    checked: false,
    indicator: 7
  },
  {
    value: 'Acuerdo',
    checked: false,
    indicator: 7
  },
  {
    value: 'General',
    checked: false,
    indicator: 7
  },
  {
    value: 'Poderes',
    checked: false,
    indicator: 7
  },
  {
    value: 'Leyes',
    checked: false,
    indicator: 7
  },
  {
    value: 'Tribunal',
    checked: false,
    indicator: 7
  },
  {
    value: 'Orgánica',
    checked: false,
    indicator: 7
  },
  {
    value: 'Diputados',
    checked: false,
    indicator: 7
  },
  {
    value: 'Funciones',
    checked: false,
    indicator: 7
  },
  {
    value: 'Presidente',
    checked: false,
    indicator: 7
  },
  {
    value: 'Constitucional',
    checked: false,
    indicator: 7
  },
  {
    value: 'Comunidad',
    checked: false,
    indicator: 7
  },
  {
    value: 'Regulará',
    checked: false,
    indicator: 7
  },
  {
    value: 'Términos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Judicial',
    checked: false,
    indicator: 7
  },
  {
    value: 'Apartado',
    checked: false,
    indicator: 7
  },
  {
    value: 'Título',
    checked: false,
    indicator: 7
  },
  {
    value: 'Régimen',
    checked: false,
    indicator: 7
  },
  {
    value: 'Estatutos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Autónoma',
    checked: false,
    indicator: 7
  },
  {
    value: 'España',
    checked: false,
    indicator: 7
  },
  {
    value: 'Forma',
    checked: false,
    indicator: 7
  },
  {
    value: 'Plazo',
    checked: false,
    indicator: 7
  },
  {
    value: 'Administración',
    checked: false,
    indicator: 7
  },
  {
    value: 'Interés',
    checked: false,
    indicator: 7
  },
  {
    value: 'Estatuto',
    checked: false,
    indicator: 7
  },
  {
    value: 'Perjuicio',
    checked: false,
    indicator: 7
  },
  {
    value: 'Consejo',
    checked: false,
    indicator: 7
  },
  {
    value: 'Social',
    checked: false,
    indicator: 7
  },
  {
    value: 'Españoles',
    checked: false,
    indicator: 7
  },
  {
    value: 'Absoluta',
    checked: false,
    indicator: 7
  },
  {
    value: 'Normas',
    checked: false,
    indicator: 7
  },
  {
    value: 'Territorio',
    checked: false,
    indicator: 7
  },
  {
    value: 'Legislación',
    checked: false,
    indicator: 7
  },
  {
    value: 'Anterior',
    checked: false,
    indicator: 7
  },
  {
    value: 'Senado',
    checked: false,
    indicator: 7
  },
  {
    value: 'Principios',
    checked: false,
    indicator: 7
  },
  {
    value: 'Ciudadanos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Tratados',
    checked: false,
    indicator: 7
  },
  {
    value: 'Procedimiento',
    checked: false,
    indicator: 7
  },
  {
    value: 'Mismo',
    checked: false,
    indicator: 7
  },
  {
    value: 'Propuesta',
    checked: false,
    indicator: 7
  },
  {
    value: 'Iniciativa',
    checked: false,
    indicator: 7
  },
  {
    value: 'Autonomía',
    checked: false,
    indicator: 7
  },
  {
    value: 'Territorial',
    checked: false,
    indicator: 7
  },
  {
    value: 'Libertades',
    checked: false,
    indicator: 7
  },
  {
    value: 'Público',
    checked: false,
    indicator: 7
  },
  {
    value: 'Casos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Establezca',
    checked: false,
    indicator: 7
  },
  {
    value: 'Reconoce',
    checked: false,
    indicator: 7
  },
  {
    value: 'Seguridad',
    checked: false,
    indicator: 7
  },
  {
    value: 'Años',
    checked: false,
    indicator: 7
  },
  {
    value: 'Efectos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Tribunales',
    checked: false,
    indicator: 7
  },
  {
    value: 'Política',
    checked: false,
    indicator: 7
  },
  {
    value: 'Dentro',
    checked: false,
    indicator: 7
  },
  {
    value: 'Defensa',
    checked: false,
    indicator: 7
  },
  {
    value: 'Corresponde',
    checked: false,
    indicator: 7
  },
  {
    value: 'Edad',
    checked: false,
    indicator: 7
  },
  {
    value: 'Cualquier',
    checked: false,
    indicator: 7
  },
  {
    value: 'Competencias',
    checked: false,
    indicator: 7
  },
  {
    value: 'Cámara',
    checked: false,
    indicator: 7
  },
  {
    value: 'Senadores',
    checked: false,
    indicator: 7
  },
  {
    value: 'Proyecto',
    checked: false,
    indicator: 7
  },
  {
    value: 'Libertad',
    checked: false,
    indicator: 7
  },
  {
    value: 'Deberán',
    checked: false,
    indicator: 7
  },
  {
    value: 'Bases',
    checked: false,
    indicator: 7
  },
  {
    value: 'Ámbito',
    checked: false,
    indicator: 7
  },
  {
    value: 'Dispuesto',
    checked: false,
    indicator: 7
  },
  {
    value: 'Mandato',
    checked: false,
    indicator: 7
  },
  {
    value: 'Presupuestos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Órgano',
    checked: false,
    indicator: 7
  },
  {
    value: 'Órganos',
    checked: false,
    indicator: 7
  },
  {
    value: 'Organización',
    checked: false,
    indicator: 7
  },
  {
    value: 'Condiciones',
    checked: false,
    indicator: 7
  },
  {
    value: 'Desarrollo',
    checked: false,
    indicator: 7
  },
  {
    value: 'Establecido',
    checked: false,
    indicator: 7
  },
  {
    value: 'Ningún',
    checked: false,
    indicator: 7
  },
  {
    value: 'Competencia',
    checked: false,
    indicator: 7
  },
  {
    value: 'Poder',
    checked: false,
    indicator: 7
  },
  {
    value: 'Español',
    checked: false,
    indicator: 7
  },
  {
    value: 'Protección',
    checked: false,
    indicator: 7
  }
];

export default mostUsedWords;

