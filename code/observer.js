// 观察者模式
function observer(data) {
    if(typeof data !== 'object') return new Error('参数类型应为object!');
    const deps = [];
    return {
        add(watcher) {
            deps.push(watcher);
        },
        notify(...args) {
            deps.forEach(dep => dep.notify(...args));
        },
        update(target) {
            if(typeof target !== 'object') return new Error('参数类型应为object！');
            Object.assign(data, target);
            this.notify('update');
        }
    }
}

function watcher(name) {
    const w = {
        notify(type) {
            console.log(`${name} be notified, data ${type}.`);
        }
    };
    return w;
}

const ob = observer({});
['w001', 'w002', 'w101'].map(name => watcher(name)).forEach(w => ob.add(w));
ob.update({ a: 1 });
