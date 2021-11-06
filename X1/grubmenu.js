const grubmenu = (tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit) => { 
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

❲ *GROUPMENU* ❳
${tz} *${prefix}antilink* <on/off>
${tz} *${prefix}antivirtext* <on/off>
${tz} *${prefix}delete* <reply.txt>
${tz} *${prefix}hidetag* <text>
${tz} *${prefix}tagall* <text>
${tz} *${prefix}linkgc* 
${tz} *${prefix}listadmin*
${tz} *${prefix}setdesc* <text>
${tz} *${prefix}group* <buka/tutup>
${tz} *${prefix}setname* <text>
${tz} *${prefix}listonline*
${tz} *${prefix}add* <62xxx>
${tz} *${prefix}kick* <@tag/reply>

❲ *INFO LAIN* ❳
${tz} Jika bot tidak merespon, mungkin bot sedang off
${tz} bot tidak menyimpan riwayat foto/media
${tz} Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
${tz} Jika menemukan bug/err silahkan hubungi owner
`
}
exports.grubmenu = grubmenu