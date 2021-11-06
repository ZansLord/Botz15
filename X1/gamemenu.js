const gamemenu = (tz, nama, namabot, prefix, day, yy, thisDay, bulan, wib, wita, wit) => { 
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

❲ *GAME* ❳
${tz} *${prefix}susunkata*
${tz} *${prefix}tebakkalimat*
${tz} *${prefix}tebakkata*
${tz} *${prefix}tebakkimia*
${tz} *${prefix}tebaklirik*
${tz} *${prefix}tebaktebakan*
${tz} *${prefix}asahotak*
${tz} *${prefix}caklontong*
${tz} *${prefix}siapaaku*

❲ *INFO LAIN* ❳
${tz} Jika bot tidak merespon, mungkin bot sedang off
${tz} bot tidak menyimpan riwayat foto/media
${tz} Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
${tz} Jika menemukan bug/err silahkan hubungi owner
`
}
exports.gamemenu = gamemenu