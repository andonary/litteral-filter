class User {
    generate() {
        return {
            name: `${Math.random().toString(36).substr(2, 5)}`,
            dob: new Date(Math.floor(Math.random() * 100 + 1920), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
            isModerator: Math.floor(Math.random() * 10) > 5,
            isActive: Math.floor(Math.random() * 15) > 5
        };
    }
};

const listUser = new Array(Math.floor(Math.random() * 20 + 3))
    .fill(void 0)
    .map(() => new User().generate());

const is = (cb) => !!cb;

const and = (cb) => cb;

const moderator = (user) => {
    if (user && user.isModerator) return user;
    return;
};

const active = (user) => {
    if (user && user.isActive) return user;
    return;
};

const listFiltered = listUser.filter(el => is(moderator(and(active(el)))));

console.log(`listUser : ${listUser.length}`);
console.log(`classical filter : ${listUser.filter(el => el.isModerator && el.isActive).map(_el => _el.name)}`);
console.log(`litteral filter : ${listFiltered.map(el => el.name)}`);
console.log(listFiltered);
