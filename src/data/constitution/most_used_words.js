const mostUsedWords = [
  {
    value: 'ley',
    ocurrences: 157,
    articles: 108,
    checked: false,
    indicator: 20,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'gobierno',
    ocurrences: 81,
    articles: 50,
    checked: false,
    indicator: 19,
    related: ['miembros', 'gobierno', 'presidente', 'congreso', 'consejo', 'propuesta']
  },
  {
    value: 'derecho',
    ocurrences: 69,
    articles: 59,
    checked: false,
    indicator: 17,
    related: ['reconoce', 'españoles', 'comunidades', 'derecho', 'caso', 'normas']
  },
  {
    value: 'generales',
    ocurrences: 56,
    articles: 37,
    checked: false,
    indicator: 16,
    related: ['determinará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'constitución',
    ocurrences: 54,
    articles: 38,
    checked: false,
    indicator: 15,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'comunidades',
    ocurrences: 54,
    articles: 28,
    checked: false,
    indicator: 14,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'autónomas',
    ocurrences: 54,
    articles: 28,
    checked: false,
    indicator: 13,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'congreso',
    ocurrences: 52,
    articles: 30,
    checked: false,
    indicator: 12,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'miembros',
    ocurrences: 51,
    articles: 28,
    checked: false,
    indicator: 11,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'derechos',
    ocurrences: 48,
    articles: 33,
    checked: false,
    indicator: 10,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'públicos',
    ocurrences: 46,
    articles: 29,
    checked: false,
    indicator: 9,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'cortes',
    ocurrences: 46,
    articles: 33,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'mayoría',
    ocurrences: 44,
    articles: 24,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'ejercicio',
    ocurrences: 42,
    articles: 32,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'mediante',
    ocurrences: 41,
    articles: 30,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'rey',
    ocurrences: 41,
    articles: 24,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'cámaras',
    ocurrences: 41,
    articles: 25,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'acuerdo',
    ocurrences: 38,
    articles: 33,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'general',
    ocurrences: 38,
    articles: 56,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'poderes',
    ocurrences: 35,
    articles: 24,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'leyes',
    ocurrences: 34,
    articles: 29,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'tribunal',
    ocurrences: 33,
    articles: 29,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'orgánica',
    ocurrences: 32,
    articles: 31,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'diputados',
    ocurrences: 32,
    articles: 21,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'funciones',
    ocurrences: 31,
    articles: 25,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'constitucional',
    ocurrences: 30,
    articles: 26,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'presidente',
    ocurrences: 30,
    articles: 22,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'comunidad',
    ocurrences: 29,
    articles: 37,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'regulará',
    ocurrences: 28,
    articles: 28,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'términos',
    ocurrences: 27,
    articles: 21,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'judicial',
    ocurrences: 27,
    articles: 21,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'apartado',
    ocurrences: 27,
    articles: 18,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'título',
    ocurrences: 24,
    articles: 24,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'régimen',
    ocurrences: 24,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'estatutos',
    ocurrences: 23,
    articles: 15,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'autónoma',
    ocurrences: 23,
    articles: 34,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'españa',
    ocurrences: 22,
    articles: 18,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'forma',
    ocurrences: 22,
    articles: 52,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'plazo',
    ocurrences: 22,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'administración',
    ocurrences: 22,
    articles: 20,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'interés',
    ocurrences: 22,
    articles: 14,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'estatuto',
    ocurrences: 22,
    articles: 25,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'perjuicio',
    ocurrences: 21,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'consejo',
    ocurrences: 21,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'social',
    ocurrences: 20,
    articles: 22,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'españoles',
    ocurrences: 20,
    articles: 18,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'absoluta',
    ocurrences: 20,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'normas',
    ocurrences: 19,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'territorio',
    ocurrences: 19,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'legislación',
    ocurrences: 19,
    articles: 7,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'anterior',
    ocurrences: 19,
    articles: 17,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'senado',
    ocurrences: 19,
    articles: 20,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'principios',
    ocurrences: 18,
    articles: 15,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'ciudadanos',
    ocurrences: 18,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'tratados',
    ocurrences: 18,
    articles: 9,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'procedimiento',
    ocurrences: 18,
    articles: 17,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'mismo',
    ocurrences: 18,
    articles: 33,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'propuesta',
    ocurrences: 18,
    articles: 14,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'iniciativa',
    ocurrences: 18,
    articles: 9,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'autonomía',
    ocurrences: 17,
    articles: 12,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'territorial',
    ocurrences: 17,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'libertades',
    ocurrences: 17,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'público',
    ocurrences: 17,
    articles: 38,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'casos',
    ocurrences: 17,
    articles: 17,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'establezca',
    ocurrences: 17,
    articles: 20,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'reconoce',
    ocurrences: 16,
    articles: 17,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'seguridad',
    ocurrences: 16,
    articles: 12,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'años',
    ocurrences: 16,
    articles: 11,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'efectos',
    ocurrences: 16,
    articles: 12,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'tribunales',
    ocurrences: 16,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'política',
    ocurrences: 15,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'dentro',
    ocurrences: 15,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'defensa',
    ocurrences: 15,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'corresponde',
    ocurrences: 15,
    articles: 15,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'edad',
    ocurrences: 15,
    articles: 16,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'cualquier',
    ocurrences: 15,
    articles: 19,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'competencias',
    ocurrences: 15,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'cámara',
    ocurrences: 15,
    articles: 29,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'senadores',
    ocurrences: 15,
    articles: 9,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'proyecto',
    ocurrences: 15,
    articles: 14,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'libertad',
    ocurrences: 14,
    articles: 21,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'deberán',
    ocurrences: 14,
    articles: 15,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'bases',
    ocurrences: 14,
    articles: 7,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'ámbito',
    ocurrences: 14,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'dispuesto',
    ocurrences: 14,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'mandato',
    ocurrences: 14,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'presupuestos',
    ocurrences: 14,
    articles: 8,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'órgano',
    ocurrences: 14,
    articles: 18,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'órganos',
    ocurrences: 14,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'organización',
    ocurrences: 13,
    articles: 10,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'condiciones',
    ocurrences: 13,
    articles: 12,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'desarrollo',
    ocurrences: 13,
    articles: 11,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'establecido',
    ocurrences: 13,
    articles: 12,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'ningún',
    ocurrences: 13,
    articles: 13,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'competencia',
    ocurrences: 13,
    articles: 18,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'poder',
    ocurrences: 13,
    articles: 32,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'español',
    ocurrences: 12,
    articles: 27,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  },
  {
    value: 'protección',
    ocurrences: 12,
    articles: 8,
    checked: false,
    indicator: 7,
    related: ['regulará' ,'derecho' , 'orgánica', 'términos']
  }
];

export default mostUsedWords;

