angular.module('baztan').filter('festaName', festaName);

function festaName() {
    return function(festa) {
        if (!festa) return;
        var otherId = _.without(festa.userIds, Meteor.userId())[0];
        var otherUser = Meteor.users.findOne(otherId);
        var hasName = otherUser && otherUser.profile && otherId.profile.name;
        return hasName ? otherUser.profile.name : 'PLACE HOLDER';

    };
}
