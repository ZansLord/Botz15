const ownermenu = (tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit) => { 
	return `❲ *${namabot}* ❳
${tz} *OWNER* : ${nama}
${tz} *BOTNAME* : ${namabot}
${tz} *PREFIX* : *${prefix}* 
${tz} *TGGAL* : ${day}
${tz} *HARI KE* : ${yy}
${tz} *HARI* : ${thisDay}
${tz} *BULAN* : ${bulan}
${tz} *WIB* : ${wib}
${tz} *WITA* : ${wita}
${tz} *WIT* : ${wit}

❲ *OWNERMENU* ❳
${tz} *${prefix}return* <kode>
${tz} *${prefix}setppbot* <reply.img>
${tz} *${prefix}join* <link>
${tz} *${prefix}settz* <kode>
${tz} *${prefix}setprefix* <text>
${tz} *${prefix}bcgc* <text>
${tz} *${prefix}bc* <text>

❲ *INFO LAIN* ❳
${tz} Jika bot tidak merespon, mungkin bot sedang off
${tz} bot tidak menyimpan riwayat foto/media
${tz} Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
${tz} Jika menemukan bug/err silahkan hubungi owner
`
}
exports.ownermenu = ownermenu