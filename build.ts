import { type Build } from 'xbuild';

const build: Build = {
    common: {
        project: 'lz4',
        archs: ['x64'],
        variables: [],
        copy: {},
        defines: [],
        options: [
            ['LZ4_BUILD_CLI', false],
        ],
        subdirectories: ['lz4/build/cmake'],
        libraries: {
            lz4_static: {
                name: 'lz4'
            }
        },
        buildDir: 'build',
        buildOutDir: '../libs',
        buildFlags: []
    },
    platforms: {
        win32: {
            windows: {},
            android: {
                archs: ['x86', 'x86_64', 'armeabi-v7a', 'arm64-v8a'],
            }
        },
        linux: {
            linux: {}
        },
        darwin: {
            macos: {}
        }
    }
}

export default build;