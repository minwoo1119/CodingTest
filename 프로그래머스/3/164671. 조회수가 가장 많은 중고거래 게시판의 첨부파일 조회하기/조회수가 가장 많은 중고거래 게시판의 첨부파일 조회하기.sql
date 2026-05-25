select concat('/home/grep/src/', B.BOARD_ID,'/',F.FILE_ID, F.FILE_NAME, F.FILE_EXT) as FILE_PATH
from (select * from USED_GOODS_BOARD order by VIEWS desc limit 1) B join USED_GOODS_FILE F
on B.BOARD_ID = F.BOARD_ID
order by F.FILE_ID desc
