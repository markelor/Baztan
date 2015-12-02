angular.module('baztan').filter('calendar', calendar);

function calendar() {
    return function(time) {
        if (!time) return;
        return moment(time).calendar(null, {
            lastDay: '[Atzo]',
            sameDay: 'LT',
            lastWeek: 'dddd',
            sameElse: 'DD/MM/YY'
        });
    };
}
