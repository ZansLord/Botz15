const search = (tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit) => { 
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

❲ *SEARCH* ❳
${tz} *${prefix}growstock* <text>
${tz} *${prefix}moddroid* <text>
${tz} *${prefix}kodepos* <text>
${tz} *${prefix}artikata* <text>
${tz} *${prefix}katabijak* <text>
${tz} *${prefix}grubwa* <text>
${tz} *${prefix}stalkyt* <text>
${tz} *${prefix}stalktt* <text>
${tz} *${prefix}pinterest* <text>

❲ *INFO LAIN* ❳
${tz} Jika bot tidak merespon, mungkin bot sedang off
${tz} bot tidak menyimpan riwayat foto/media
${tz} Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
${tz} Jika menemukan bug/err silahkan hubungi owner
`
}
exports.search = search