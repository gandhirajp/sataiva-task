import React from 'react'

const Footer = () => {
    return (
        <> <div className='footer'>
            <div className='foo1'>
                <div className=''>
                    <img className='fooimg' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUPEBAWFhUWFhUWFhAVEhkYGhUWFRUWFhUVFhgaHSggGR0lHRUVITEhJikrLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGy0lICUtLS0tLSstLS0rLS0tLy8tLS0tKy0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcCAwUEAQj/xABEEAABAwEEBQUNBwQDAAMAAAABAAIDEQQFMUEGEiFxgQciUVJhEyM0NUJTcnODkbGyszJEYqHBwsMzgtHwQ2PSFCXh/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EADIRAAICAAMECAcAAwEBAAAAAAABAgMEESExMoGxBRIzQWGRofAiUXFywdHhEzSyJCP/2gAMAwEAAhEDEQA/ALxREQAREQAREQAREQAREQAREQAWD3hoJJAAxJyXGvfSKGz1aDrv6jTh6Ry+Khl53zNaTz3UblG3Y0cM95St+LhXotX8v37ZTO6MdNrLEsdvimr3KQOpjT/HR2r1qpIJXMcHMcWkYOBoVLLp0twZaB7Vo+Zv6j3KqnHRlpPR+n8IwxCe9oS9FpgnZI0PY4OacHDatyfGAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi89rtkcLdeR4a3pJ+HSode+mjnVZZm0HnXDb/a3LiqrLoVr4iuy2MNpLrXb4oaCV7W6xoATitk8TZGFpJo4YtcQdvQQqhllc9xe9xc44uJqSutcukM1lo0HWZ5t2A9E5fBKRxybyktPfv8AZQsUm9Voey+NFpYKvi74zs+0N4z3hcEFWddN9Q2od7dR2cbtjh/kdoXlvnRyK0Ve3mSdYYOP4hnvxULMHGS61L4fo5KhNZwK9CzC9N43ZNZnUkbQZPG1rtx/ReMLOcWnkxdpp5M9t33hLA7WieR0jEHeFMbq0oilo2XvbunyTxy4qCBfQrKcTOrd2fL3sLIWSjsLbRVzdV+TWegB1mebdhwOSmV133DaNjTqv827Hh08FrUYuu3TY/k/x8+fgOQtjI6iIiaLAiIgAiIgAiIgAiIgAiIgAiIgAiLhX3pNZ7JVpOvJ5tuI9I4N+PYuSkorNkZSUVm2d1ea290Mbu5FofTmlwqK9qjdzaaRTHUnHcnHB1asPYTkd+xStpBFRgoxnGazizkJxsWcWVNfgtQlP/y9bWyJ+zT8GVNy54VxWyyRzMLJGhzTkf06D2qFX1oa+Or7MddvmyecNx8r471n3YWSfWjrz/ojbhpRea15/wBIqCvoWLmkEgihGwg4gjIrIFJC5sjkLSHNJBGBBoRuKlty6XkUjtIqMO6jH+4Z7wocFkFKuyVbziyyFkoPNFuAxTx+TIx24gqL3xojSr7MfZE/Kf0PvUZu285rM7WifTpadrTvH6qc3LpJFaKMdzJOqTsd6J/RPK2rELqzWT97H+GNqdduktH72EBkjcwlrmkEYtIoRwX0Kyr0umG0tpI3bk8bHDjnuKhV76PzWarvtx9cZekMvgk78JOvVar3tKrKXD6HKCzaabR71rBWQSZWiR3VpPIyjZee3rV5w4+VxUtsVuinbrRuB6RmN4yVZBbYJnxuD2OLSMwU5Rjp16S1Xr5/svhc1t1LSRRW69KQaMtAp/2AbP7hlwUmika8BzSCDgQagrXpvhas4P8AY1GalsNiIitJBERABERABERABc29r5gsjdaZ4ByYBVztwHxwXl0wtz7NYpJYjR4LADStNZ7WnHsJVRyzPkcXvcXOOLnEkniVRdd1NEtRLFYv/E+qlrln4e9CUX3ppPaKsh71H2HnOHa7LcPeoyCsQvoSEpOTzZmyslN5yeZsC7Nx6RT2SgadaPOJ2HbqnyT/ALRcULIFRTcXmgjJxecXkWzcukEFrFGHVfnE7YeGThuXZVHscQag0ORGSltx6ZyR0ZaAZG+c8sb+t8d6brxa2T8zSqxiek/Mlt83FBaxzxR+UjcRv6R2FQO+tHp7KSSNZmUjcP7hiPgrHsVuinZrxPDh2HDsIyK9R27CrbMPC3Xv+aLrKYWa+pTIWQU7vrQ+OWr4CI3dSnNP/nhs7FCrbY5YH6krC09uB7QcCFmW0Tr27Pn3CNlUobTUF9CxC+gpdkSRXNpRLBRknfGdv2mjsOe4qb3feEVobrxPBGYzHYRkqoBW+y2l8Tg+Nxa4Zg/kekdibpxk4aPVevmMV3yjo9hOb30Xjlq+LmP6PJO8ZcFDrbY5IHakrC05dB7Qc1Kbn0sY+jLRRh84Psnf1fgpDaII5mar2h7Th/kH9Qr54erELrVvJ+9q/Jc4QsWcCrgswVIb30WfHV8FXt6nlDd1vio6QRsOPQsu2qdbykiiUXF5M2Beu77wlgNY3U6WnaDvC8QKyCqTcXmnqCeWwnF16RRTUa/mP7cDuOXFdxVYFLdDJ3uEjHOJDdTVBNaV1609wWthMdKclXNavv4Z6jNdrbyZJkRFqF4REQAREQBG+ULxdLvi+qxVMCrY5Q/FsnpRfVYqlBSWI3+Bi9IdsvtXNmwFe667tmtL9SFhcczk30jgFzwVbOgA/wDrou0y/VeP0VdVanLJleFqVs+q/ln78yAXxcVosZ763mnCRu1p7K0FDvoucCrwkjDgWuAIOwgioI7QobfuhDXVksp1Tj3Enmn0T5O47NynZhmtYjduDa1hr4d/9IGFkCsrTZpIXmOVha4YtI/2q1hJtCew9lgt0sD9eJ5aekZ9hGBG9Ti5NMo5KMtA1HdcfYO/NvwVehZBSrulXsL6rpV7PIuxrgRUGo6V57bY452FkrA4dBy7QcQdyrO5r/nshow6zM4nYcOqp7c2kMFqFGu1X5xux4HB3BaFeIhZo9vyfvU0a742aenvaRu+dEJI6vs/Pb1D9obut8VF6U2H3dCuVci+LhhtQq4ar8pG48ekKi7BJ616eHv39CuzDLbDyKzC+hdK9rinspq5uszKRuHHq8VzAsyUHF5S2iri08mZgrq3Rfc1mNGnWZnGcOHQuSsm7dg9y5GTg84vI6pNPNFmXTfUNpHMNHZsdjw6Qvl63HFaNpGq/KQY8elRq5dF5XkSTExjEAfbPb+H4qbgUFPitmnrWwytj/eHd7yH4Zzj8aK5vO55rMeeKtykbhx6CvECrFvyVrbNLrECrHAVOJLSAB2quAsrGURpmlHv9Be2Cg9DIKVaD4zez/kUVBUp0Gxm9n/Io4H/AGI8f+Wdq30SxERehHAiIgAiIgCNconi2XfF9ViqMFW3yi+LZfSi+qxVGEniN7gYfSPbL7VzZsCtvk/8Wxb5PqvVRAq3eT3xbDvk+q9cw+/wJdHds/tfNGvS+/pLC+EsaHNdr6zDsrTVpQ5HaV77lv8Agtje9uo+m2J2xw4ZjtCjPKj/AMHtP2KDRSOa4OaSCNocDQg9hUp3ShY13DFmKlXdJbVpyRdN5XZDaWakzA7oObe1pxCgN+aHTWer4ayx9UDnNHaB9rePcvTcOnDmUjtYLh51o5w9Jox3jbvU/ikDmhzTUEAg9IOBU3Gu9eJflViVmtvqiklmCrPvzRiC1VfTUk840Y+kMDvxVf3vcs9kNJW82tBI3a08cj2FJW0Sh9BKzDzr1eq+Z4Qs2uINQaEZhawVkEuysldy6YSRUZODI3r+WN/W+Km9ht0U7deJ4cOw7QegjIqngvTY7ZJC/XieWu6R8CMCmKsXKOktV6jdeJlHSWqLgc0EUIqDiDmovfOiTJKvs5DHdTyTu6vwXp0Yv59rBD4iCMZW/ZJ6Ow9m1SFPtV3w11Q78FsfArWxaN2p8hYYywA7Xuw4dbgpndFww2YAgaz/ADjht/tHkrrrj3vf8Fm5pOs/zbceJyVUKKqF1n5v3+MyEaoV/E/U6ziBtPvUbvbSuOOrYKSO61eaP/XBRi9b8ntJo51GZRtw45niueEtfjm9K/P9e+BXPEZ6RPVbLbJO7XkeXHLoHYBktIWAX0LMbbebF8zYCpXoJjN7P+RRmx2SSZ2pG0uPZl2k5KbaN3Q6ytcXuBc/VqBg3V1s8/tJrA1ydymlos9eDRfSm5JncREW6OBERABERAEZ5RfFku+P6rFUIKt3lF8WS74vqsVQhKX7xhdJ9svtXNmYVvcnni2HfJ9V6p8FXByeeLId8n1XrmH3uB3o3tX9r5o4nKl/we0/aoGCp3yp/wDB7T9igYVd++zmL7eXDkjOqu26vB4vVs+UKkKq77q8Hh9Wz5QrMLtY10ftlwPYtckbXAtcAQdhBFQd4Xjv00sk5/6pPkKgdyaZzQ0ZNWVnSTRw4n7XH3q+dsYNKXeO2XxrklLvOvfehTTWSy7D5onYfROW4/koXabO+JxZI0tcMWkf7VW1dt6QWputDIHdLcHN3jELK8bshtLdWZgd0HNu44hUWYWM11oacimeGhNdaH8KnsNjlndqRMLndAy3k7BxU2ubQ1jKPtJ13ebH2RvOJ+CktisUcDdSJgaOgDHtJzK2TzNjaXvcGtGLiaAcSu1YSMdZa8iVeGjHWWvIyjYGgNaAANgAFANy894XjDZ260rw3oGJO4DaVF750zAqyzCv/a7D+1ue8qITzvlcXyOLnHFzjVRtxkY6Q1fp/QsxMVpHXkSK+NLZZqsh72zp8s8cuHvUdWIQLMsslN5yYnKbk82bAvoKxbt2D3KSXTonLLR03e29BHOPDyePuXIVSseUVmShFyeSRwoYnPcGsaXE4ACpUpurRJxo60Gg8207eJy4KS3fdkNnbSJgHS7M7yvatGnARWtmr9P6OQoS1lqaLNZmRN1I2ho6APj0retM8zI2lz3BoGJJoF4rrvaO0ukbHWjNXnHZXW1sB/b+ad68YtR8l/C/NJ5HTREUzoREQAREQBGeUbxZLvi+qxU8Crg5R/Fk2+L6rFToSt28YPSnbL7VzZsBVwcnni2HfJ9V6p4FXDyd+LId8n1XrlG9w/R3oztn9r5o4nKp939p+xQIFTzlW+7+0/YoACq799kcb28uHJGyqvC6fBofVs+UKjaq8rp8Gh9Wz5Ap4Xaxro7bLgar/wDBJ/VSfIVTYVyX/wCCT+qk+QqmQo4vaieP3o/Q9FmnfG4PjcWuGDgaFWLoZpBLa9aOUAuY0Hug2a22m0YV3KtQplya/wBaX0G/MqsPJqaS7yrCTasST0ZN7xtBhhfKBUtaXU6aBVXed7z2p2tK+oyYNjRuH6narOv7wSb0HfBVCFPGt5pdwxjJPNLuNgX0FYgrp3Tcs9qPe2c3OR2xo458Ekk5PJCkU28keCq7lz6Nz2mjqajOu7MfhGfwUsufRaCz0c7vj+s4bB6Lf81UgTlWC77PJfserwvfPyOVdVxQWbaxtX5yO2nh0cF1UXBvbSWCz1a090f1W4De7DhinW4VR10Qy3GC+SO45wAqTQDEnJRu9dK446thHdHdPkjjn/u1RS876ntR746jco27G/8A7xXgCz7se3pXp49/l7+gtPEN7p7bbb5Z3a0ry7oGAG4YBSPQDGf2X8iiQUs5P8Z/ZfyJbCNvERb8f+WQpedizJiiIt0fCIiACIiAIxyj+LJd8X1WKmwVcnKP4sm3xfVYqbS1u8YHSvbL7VzZmCri5OvFkO+T6r1TYKuPk58WQ75fqvRSviDovtn9r5o4nKv939p+xV+Cp/ysfd/afsVfgqq7fZHGv/0S4ckZ1V53R4ND6uP5AqKqr2ujweL1cfyBTw21jfRu2XD8mq/vBJ/UyfI5UwCrnv8A8DtHqZfkcqWBUcVtRLpDejxNgKmfJp/Xl9W35lCgVNOTP+vL6DfmVNHaRKML2sSZ3/4JN6Dvgqru27prS7UhYXdJyG92AVvWqztlY6N4q1wIIqRUHHaF9s1nZE0MjaGtGDWigTdtH+SSbZp24f8AySTb0RGLm0Lijo+0Hujup5A39b4dilTGBoAAAAwAFANyzXivG8obM3WleG9AxJ3AbSrIwhWtNC2MIVx00R7Vyr2v2Cyij3VdlG3a7j0cVEL40xllq2AGNvW2ax44N4e9RsuJNSak4k5pW3GJaQ8xazFLZDzO7e+k09oq0HubOo07T6Ts92C4oWIWQWdOcpPOTzFHJyebMgsgsWNLiGgEk7AAKknsClF0aISPo+0HUb1B9o78mrkKpWPKKJwg5PJHAssD5XBkbC4nID49Cnei1zvsrXmRwq/V5o8nV1s8/tfkurYrDFA3UiYGjsxO84lZQ2uN7nMY8FzKawBrStaV9xWnRhI1NSk9fTZ6jtVKhq3qehEROl4REQAREQBGOUfxZNvi+qxU0rl5R/Fk2+L6rFTSWu3jA6V7ZfaubPquTk58WQ75fqvVNK5eTjxZD6Uv1Xop3jnRfbP7XzRwuVn7v7T9ir8FT/la+7+0/jVfAqFu+yGO/wBiXDkjOqve6PB4vVx/IFQ1VfN0eDxerj+QKVG1jfRe2fD8mrSDwO0epk+QqlAVdekPgdo9TL8jlSYKjidqJ9I70ePM2hTPky/rzeg35ioSCpryYf15vQb8yppX/wBEUYXtYljLz2u1RwsL5XhrRmT/ALVar2tJis8kraVaxzhXCoCqG3XjNaHa80hce07B2AYBN3Xf4zTvxCqyWWrJhfOnBNWWVtB51w2/2ty3n3KHzTPkcXvcXOOLiakrQFkCs6yyU95mbO2djzkzYF9CxBXWue4bRajVjdVnnHCg4dbgq4xcnktQjFyeSOcCpBc+i089HPHc2dZw5x3N/UqVXPo1BZqOI7o/ruGB/CMB8V0rfeMNnbrSvDegZncMSm68GkutY/fix6GGSWc/fE03Vc0FlFI27c3u2uPHLgvl631BZh3x3OyjbtceGW8qJ3vphJJVkA7m3DX8o/8An4qNOcSakkk4kmpO8rtmMjBdWpfolLERjpBHevXSae0Va3vbOq07T6Tv8Lp8nuNo9l/IoeFMOT3G0ey/kS2HnKeIi5PPbyZVVJysTfvRkzREWyaAREQAREQBG+UCF0l3StY0uPezqtFTQSNJNB2AqlwV+jFGNIdD7NbKvp3OXrtAo4/ibnv2FVWVuTzRmY7BSufXg9cssuL7+P8ASm1cnJx4sh9KX6r1WV/aNWmxHvrKsrslbtad/VPYVZvJx4sh9KX6r1CpZS1FOjYShiHGSyfVfNHA5W/u/tP2KvQVYXK7939p/Gq8BULd4ox/+zLhyRk5X3dPg8Xq4/kCoMnYr8ujweL1cfyBSo2sc6K3p8PyatIfA7R6mX5HKkQru0h8DtHqZfkcqPBUMRtRLpLejx5mwFTbkw/rzeg35lCAptyXf1pvQZ8yrp7RC+E7aPvuZNtIvBJvQcqcBVx6ReCTeg74Kn7HZpJnBkTC9x8lo+PRxUsXvIcx2/FeH5PgXtuu7JrU7VhYXdLsGjeclLLj0FAo+1uqce4tOzc52fD3qZxRxws1WhrGNGAoAAo14VvWWgU4OUtZ6c/4Ry5dDYYaPm74/GmDAd3lcfcpHPPHCzWe4MaMzsAUXvnTWKOrLOBI7rmuqP1dw2dqhNvvGa0v15nlxyGQ9EYBWSurqWUF78X3l0r6qV1a1n7733ktvjTbFllb7Vw/Nrf8+5RGed8ri+Rxc4+UTVaAsgkbLJWP4mKTtlN/EzYCsgtQXrsNilndqRMLj2YDeTsCpyb0QI0hTTk/jcBM8tOq7uYDqbDTuladNKhbrn0Rjjo+c67uoPsjfm74KUNaAKAUA2ADJaGGwsoyU5aZd3DL3tHaKGn1pGaIi0BsIiIAIiIAIiIA1yRtcC1wBBFC0ioIORBxWmwWKOBncomBrASQ0YDWJcadG0lepEHMlnmVxyu/d/afsVdhX/eN3xWmMxzRh7Tkcu0EbQe0Ku9IeTySOsljOu3ae5OPOHonB3Gh3qiyDzzRi47B2Sm7Y6p5ad+zLjs7vIgpwV/XR4PD6uP5AqCla5hLHAhw2FpFCD0EHBX7dHg8Pq4/kC5RtZ3onenw/Jq0h8DtHqZfkcqOBV46Q+B2j1MvyOVGNKjftRLpPfjx5mwFTfkt/rzegz5lBgVKtAb3hss7zM7VD2hodTYCDXndG9U1NKabFcLJK6LfvRloW2zNmjdE6uq4FppjQ9C13dd0NmZqQxhgzoNp7XHEneufe+k9lszQTIHuIq1jCHE1wONAO0qAX3pbabVVoPc4/NsOPpOxO7YE1O2EPqbF2Jqreur9fPuJtfWl1ns1WsPdZBs1GnYD+J2W7aVA73v20Ws98fRuUTdjRwzPaVxwsgUlZbKf0M+zEzs27PkbQV9CwBWVVQylM2ArOJhcQ1oJJwaBUncAuzcei09po8jucZ8tw2kfhbnvOxT66Lkgso72znZvO1x45bgra8NKfghurDznrsRFrl0Ne+j7SdUY9yH2j6R8n/cFNLJY44WakTA1vQB+Z6SvSi0K6YVr4V+zRrqjDYERFaWBERABERABERABERABERABERAHGv3R6z21tJmc7KRuxw3HPcahdGxwdzjZHWuq1ra9OqAK/kvQi5ks8yKhFScktWc3SLwK0epl+Ryotqvq87L3aCSEGndGPbrUrTWaRWmeKpq+9HrTYnUlZzcpW1LTxyPYVRennmZXSkJPqyS0WefgcwFZgrWCswUq0ZaMwsgVrBWwFRJozBWQKysdlkmeI4mOe4+S0V4noHaVPLh0Fa2klqOsfNNwHpOz3D812Ncp7Bimmdu6uPcRS6LmntbqRMqK7ZDsa3ef0G1WBceiUFmo9/fJNnOI5rT+Fv6lSCGFrGhjGhrRg1oAA3ALanK8PGOr1ZrU4WENXq/fcERFeNBERABERABERABERABERABERABERABERABERABa5Iw4FpAIOIIqDvC2IgCC6Qcn8clX2UiN3myTqncdpHwVfXjd81mf3OeMsdlXAjpacCNyvteW3WGKdhjlYHtORH5joPaqZ0p7NDPv6PhPWGj9Hw/RQ7ej8ulTK4NBppaPtPemdTyncMG8dvYppc2jVmsZLomVca89x1nAHJpyH5713FGNHfIrw/R6Wtrz8Fs8+/0PBdl1Q2VmpDGGjM4l3a4naV70RMJZbDTSSWSCIiDoREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQB/9k=" alt="logo" />
                </div>
                <div className='sociall'>
                    <p>Fohlio is a powerful and intuitive FF&E specification, procurement, and product information management tool for multi-site projects.</p>
                </div>
                <div className='social-link'>
                    <a href="#">
                        <img className='img' src="data:image/png;base64,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" alt="insta" />
                    </a>
                    <a href="#">
                        <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="insta" />
                    </a>
                    <a href="#">
                        <img className='img' src="https://seeklogo.com//images/F/facebook-logo-966BBFBC34-seeklogo.com.png" alt="insta" />
                    </a>
                    <a href="#">
                        <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="insta" />
                    </a>
                    <a href="#">
                        <img className='img' src="data:image/png;base64,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" alt="insta" />
                    </a>
                </div>

            </div>
            <div className='foo2'>
                <div className='foo21'>
                    <h4>CONTACT</h4>
                    <br />
                    <p className='add'>info@fohlio.com</p>
                    <br />
                    <p>1 Liberty Street,  3rd Floor,</p>
                    <p>New York, NY 10006, </p>
                    <p>U.S.A</p>
                </div>
                <div className='foo22'>
                    <h4>MENU</h4>
                    <br />
                    <p className='add'>About Us</p>
                    <br />
                    <p className='add'>User Terms and Agreements</p>
                    <br />
                    <p className='add'>Sponsorship</p>
                    <br />
                    <p className='add'>Privacy Policy</p>
                </div>
            </div>
        </div>
            <hr />
        <div className='footerend'>
            <p>© Fohlio. All rights reserved. 2022</p>
        </div>
        </>
    )
}

export default Footer