select A.APNT_NO,
    P.PT_NAME,
    A.PT_NO,
    A.MCDP_CD,
    D.DR_NAME,
    A.APNT_YMD
from APPOINTMENT A join PATIENT P
on P.PT_NO = A.PT_NO
join DOCTOR D on D.DR_ID = A.MDDR_ID
where DATE_FORMAT(APNT_YMD,'%Y-%m-%d') = '2022-04-13'
and D.MCDP_CD = 'CS'
and A.APNT_CNCL_YN = 'N'
order by A.APNT_YMD ASC