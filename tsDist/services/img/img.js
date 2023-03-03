"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = void 0;
function importAll(r) {
    return r.keys().map(r);
}

exports.images = importAll(require.context('@assets/img/', false, /\.(png|jp?g|svg)$/));
