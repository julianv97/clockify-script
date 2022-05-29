"use strict";
exports.__esModule = true;
exports.TASKS_PER_DAY = exports.DAYS_TYPES = exports.HOURS_PER_DAY = exports.LABORABLE_DAYS = void 0;
exports.LABORABLE_DAYS = 5;
exports.HOURS_PER_DAY = '400';
exports.DAYS_TYPES = {
    FERIADO: 'FERIADO',
    LABORABLE: 'LABORABLE'
};
exports.TASKS_PER_DAY = [
    'Revisión PRs. Implementación push notifications iOS',
    'Revisión PRs. Implementación push notifications Android',
    exports.DAYS_TYPES.FERIADO,
    'Revisión PRs. Resolución bugs regression.(RRQP-467-468-475)',
    'Revisión PRs. Resolución bugs regression.(RRQP-469-470). Implementación de nuevas reglas de lint',
];
