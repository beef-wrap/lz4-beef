clang -c -g -gcodeview -o lz4-windows.lib -target x86_64-pc-windows -fuse-ld=llvm-lib -Wall lz4\lz4.c

mkdir libs
move lz4-windows.lib libs
