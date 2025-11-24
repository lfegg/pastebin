class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const moonbitlang$core$builtin$$int_to_string_js = (x, radix) => {
  return x.toString(radix);
};
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
};
const moonbitlang$core$builtin$$MyInt64$compare_u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
const $4294967295L = { hi: 0, lo: -1 };
const $0L = { hi: 0, lo: 0 };
const $1L = { hi: 0, lo: 1 };
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const lfegg$pastebin$src$$generate_id$46$chars$124$2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function moonbitlang$core$abort$$abort$0$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$1$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$2$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$2$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$4$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$Logger$write_string$4$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Compare$op_lt$5$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$6$(x, y) < 0;
}
function moonbitlang$core$builtin$$Show$to_string$7$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$8$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$4$, method_1: moonbitlang$core$builtin$$Logger$write_substring$4$, method_2: moonbitlang$core$builtin$$Logger$write_char$4$ });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$0$("Invalid index for View");
}
function moonbitlang$core$string$$String$substring$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$4$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$8$(self, logger) {
  logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner(self, 10));
}
function moonbitlang$core$array$$FixedArray$makei$9$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$add$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$10$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$10$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$MyInt64$mod_u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
    const _ahi = self.hi;
    const _alo = self.lo;
    const _bhi = other.hi;
    const _blo = other.lo;
    const _func = exports.rem_u;
    const lo = _func(_alo, _ahi, _blo, _bhi);
    const _func$2 = exports.get_high;
    const hi = _func$2();
    return { hi: hi, lo: lo };
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$MyInt64$lnot(self) {
  return { hi: ~self.hi, lo: ~self.lo };
}
function moonbitlang$core$builtin$$MyInt64$land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$builtin$$Add$add$6$(self, other) {
  return moonbitlang$core$builtin$$Add$add$10$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$6$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$10$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$6$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$10$(self, other);
}
function moonbitlang$core$builtin$$Mod$mod$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$mod_u(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Compare$compare$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$6$(self, other) {
  const _p = self;
  const _p$2 = other;
  return _p.hi === _p$2.hi && _p.lo === _p$2.lo;
}
function moonbitlang$core$builtin$$BitAnd$land$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$lnot(self) {
  return moonbitlang$core$builtin$$MyInt64$lnot(self);
}
function moonbitlang$core$builtin$$Shl$shl$6$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$6$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$array$$FixedArray$blit_to$46$inner$2$(self, dst, len, src_offset, dst_offset) {
  if (dst_offset >= 0 && (src_offset >= 0 && ((dst_offset + len | 0) <= dst.length && (src_offset + len | 0) <= self.length))) {
    moonbitlang$core$array$$FixedArray$unsafe_blit$2$(dst, dst_offset, self, src_offset, len);
    return;
  } else {
    moonbitlang$core$abort$$abort$1$(`bounds check failed: dst_offset = ${moonbitlang$core$builtin$$Show$to_string$7$(dst_offset)}, src_offset = ${moonbitlang$core$builtin$$Show$to_string$7$(src_offset)}, len = ${moonbitlang$core$builtin$$Show$to_string$7$(len)}, dst.length = ${moonbitlang$core$builtin$$Show$to_string$7$(dst.length)}, self.length = ${moonbitlang$core$builtin$$Show$to_string$7$(self.length)}`);
    return;
  }
}
function moonbitlang$core$builtin$$Shr$shr$11$(self, count) {
  return (self >>> count | 0) & 255;
}
function moonbitlang$core$random$internal$random_source$$setup(seed, b32, counter) {
  $bound_check(b32, 0);
  b32[0] = 1634760805;
  $bound_check(b32, 1);
  b32[1] = 1634760805;
  $bound_check(b32, 2);
  b32[2] = 1634760805;
  $bound_check(b32, 3);
  b32[3] = 1634760805;
  $bound_check(b32, 4);
  b32[4] = 857760878;
  $bound_check(b32, 5);
  b32[5] = 857760878;
  $bound_check(b32, 6);
  b32[6] = 857760878;
  $bound_check(b32, 7);
  b32[7] = 857760878;
  $bound_check(b32, 8);
  b32[8] = 2036477234;
  $bound_check(b32, 9);
  b32[9] = 2036477234;
  $bound_check(b32, 10);
  b32[10] = 2036477234;
  $bound_check(b32, 11);
  b32[11] = 2036477234;
  $bound_check(b32, 12);
  b32[12] = 1797285236;
  $bound_check(b32, 13);
  b32[13] = 1797285236;
  $bound_check(b32, 14);
  b32[14] = 1797285236;
  $bound_check(b32, 15);
  b32[15] = 1797285236;
  $bound_check(seed, 0);
  $bound_check(b32, 16);
  b32[16] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 17);
  b32[17] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 18);
  b32[18] = seed[0];
  $bound_check(seed, 0);
  $bound_check(b32, 19);
  b32[19] = seed[0];
  $bound_check(seed, 1);
  $bound_check(b32, 20);
  b32[20] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 21);
  b32[21] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 22);
  b32[22] = seed[1];
  $bound_check(seed, 1);
  $bound_check(b32, 23);
  b32[23] = seed[1];
  $bound_check(seed, 2);
  $bound_check(b32, 24);
  b32[24] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 25);
  b32[25] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 26);
  b32[26] = seed[2];
  $bound_check(seed, 2);
  $bound_check(b32, 27);
  b32[27] = seed[2];
  $bound_check(seed, 3);
  $bound_check(b32, 28);
  b32[28] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 29);
  b32[29] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 30);
  b32[30] = seed[3];
  $bound_check(seed, 3);
  $bound_check(b32, 31);
  b32[31] = seed[3];
  $bound_check(seed, 4);
  $bound_check(b32, 32);
  b32[32] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 33);
  b32[33] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 34);
  b32[34] = seed[4];
  $bound_check(seed, 4);
  $bound_check(b32, 35);
  b32[35] = seed[4];
  $bound_check(seed, 5);
  $bound_check(b32, 36);
  b32[36] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 37);
  b32[37] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 38);
  b32[38] = seed[5];
  $bound_check(seed, 5);
  $bound_check(b32, 39);
  b32[39] = seed[5];
  $bound_check(seed, 6);
  $bound_check(b32, 40);
  b32[40] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 41);
  b32[41] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 42);
  b32[42] = seed[6];
  $bound_check(seed, 6);
  $bound_check(b32, 43);
  b32[43] = seed[6];
  $bound_check(seed, 7);
  $bound_check(b32, 44);
  b32[44] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 45);
  b32[45] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 46);
  b32[46] = seed[7];
  $bound_check(seed, 7);
  $bound_check(b32, 47);
  b32[47] = seed[7];
  $bound_check(b32, 48);
  b32[48] = counter;
  $bound_check(b32, 49);
  b32[49] = (counter >>> 0) + (1 >>> 0) | 0;
  $bound_check(b32, 50);
  b32[50] = (counter >>> 0) + (2 >>> 0) | 0;
  $bound_check(b32, 51);
  b32[51] = (counter >>> 0) + (3 >>> 0) | 0;
  $bound_check(b32, 52);
  b32[52] = 0;
  $bound_check(b32, 53);
  b32[53] = 0;
  $bound_check(b32, 54);
  b32[54] = 0;
  $bound_check(b32, 55);
  b32[55] = 0;
  $bound_check(b32, 56);
  b32[56] = 0;
  $bound_check(b32, 57);
  b32[57] = 0;
  $bound_check(b32, 58);
  b32[58] = 0;
  $bound_check(b32, 59);
  b32[59] = 0;
  $bound_check(b32, 60);
  b32[60] = 0;
  $bound_check(b32, 61);
  b32[61] = 0;
  $bound_check(b32, 62);
  b32[62] = 0;
  $bound_check(b32, 63);
  b32[63] = 0;
}
function moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35(t) {
  const _a = t._0;
  const _b = t._1;
  const _c = t._2;
  const _d = t._3;
  const a = (_a >>> 0) + (_b >>> 0) | 0;
  const d = _d ^ a;
  const d$2 = d << 16 | (d >>> 16 | 0);
  const c = (_c >>> 0) + (d$2 >>> 0) | 0;
  const b = _b ^ c;
  const b$2 = b << 12 | (b >>> 20 | 0);
  const a$2 = (a >>> 0) + (b$2 >>> 0) | 0;
  const d$3 = d$2 ^ a$2;
  const d$4 = d$3 << 8 | (d$3 >>> 24 | 0);
  const c$2 = (c >>> 0) + (d$4 >>> 0) | 0;
  const b$3 = b$2 ^ c$2;
  const b$4 = b$3 << 7 | (b$3 >>> 25 | 0);
  return { _0: a$2, _1: b$4, _2: c$2, _3: d$4 };
}
function moonbitlang$core$random$internal$random_source$$chacha_block(seed, buf, counter) {
  moonbitlang$core$random$internal$random_source$$setup(seed, buf, counter);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 4) {
      $bound_check(buf, i);
      let b0 = buf[i];
      const _tmp$2 = 4 + i | 0;
      $bound_check(buf, _tmp$2);
      let b1 = buf[_tmp$2];
      const _tmp$3 = 8 + i | 0;
      $bound_check(buf, _tmp$3);
      let b2 = buf[_tmp$3];
      const _tmp$4 = 12 + i | 0;
      $bound_check(buf, _tmp$4);
      let b3 = buf[_tmp$4];
      const _tmp$5 = 16 + i | 0;
      $bound_check(buf, _tmp$5);
      let b4 = buf[_tmp$5];
      const _tmp$6 = 20 + i | 0;
      $bound_check(buf, _tmp$6);
      let b5 = buf[_tmp$6];
      const _tmp$7 = 24 + i | 0;
      $bound_check(buf, _tmp$7);
      let b6 = buf[_tmp$7];
      const _tmp$8 = 28 + i | 0;
      $bound_check(buf, _tmp$8);
      let b7 = buf[_tmp$8];
      const _tmp$9 = 32 + i | 0;
      $bound_check(buf, _tmp$9);
      let b8 = buf[_tmp$9];
      const _tmp$10 = 36 + i | 0;
      $bound_check(buf, _tmp$10);
      let b9 = buf[_tmp$10];
      const _tmp$11 = 40 + i | 0;
      $bound_check(buf, _tmp$11);
      let b10 = buf[_tmp$11];
      const _tmp$12 = 44 + i | 0;
      $bound_check(buf, _tmp$12);
      let b11 = buf[_tmp$12];
      const _tmp$13 = 48 + i | 0;
      $bound_check(buf, _tmp$13);
      let b12 = buf[_tmp$13];
      const _tmp$14 = 52 + i | 0;
      $bound_check(buf, _tmp$14);
      let b13 = buf[_tmp$14];
      const _tmp$15 = 56 + i | 0;
      $bound_check(buf, _tmp$15);
      let b14 = buf[_tmp$15];
      const _tmp$16 = 60 + i | 0;
      $bound_check(buf, _tmp$16);
      let b15 = buf[_tmp$16];
      let _tmp$17 = 0;
      while (true) {
        const round = _tmp$17;
        if (round < 4) {
          const _bind = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b4, _2: b8, _3: b12 });
          const _tb1_0 = _bind._0;
          const _tb1_1 = _bind._1;
          const _tb1_2 = _bind._2;
          const _tb1_3 = _bind._3;
          b0 = _tb1_0;
          b4 = _tb1_1;
          b8 = _tb1_2;
          b12 = _tb1_3;
          const _bind$2 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b5, _2: b9, _3: b13 });
          const _tb2_0 = _bind$2._0;
          const _tb2_1 = _bind$2._1;
          const _tb2_2 = _bind$2._2;
          const _tb2_3 = _bind$2._3;
          b1 = _tb2_0;
          b5 = _tb2_1;
          b9 = _tb2_2;
          b13 = _tb2_3;
          const _bind$3 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b6, _2: b10, _3: b14 });
          const _tb3_0 = _bind$3._0;
          const _tb3_1 = _bind$3._1;
          const _tb3_2 = _bind$3._2;
          const _tb3_3 = _bind$3._3;
          b2 = _tb3_0;
          b6 = _tb3_1;
          b10 = _tb3_2;
          b14 = _tb3_3;
          const _bind$4 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b7, _2: b11, _3: b15 });
          const _tb4_0 = _bind$4._0;
          const _tb4_1 = _bind$4._1;
          const _tb4_2 = _bind$4._2;
          const _tb4_3 = _bind$4._3;
          b3 = _tb4_0;
          b7 = _tb4_1;
          b11 = _tb4_2;
          b15 = _tb4_3;
          const _bind$5 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b0, _1: b5, _2: b10, _3: b15 });
          const _tb5_0 = _bind$5._0;
          const _tb5_1 = _bind$5._1;
          const _tb5_2 = _bind$5._2;
          const _tb5_3 = _bind$5._3;
          b0 = _tb5_0;
          b5 = _tb5_1;
          b10 = _tb5_2;
          b15 = _tb5_3;
          const _bind$6 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b1, _1: b6, _2: b11, _3: b12 });
          const _tb6_0 = _bind$6._0;
          const _tb6_1 = _bind$6._1;
          const _tb6_2 = _bind$6._2;
          const _tb6_3 = _bind$6._3;
          b1 = _tb6_0;
          b6 = _tb6_1;
          b11 = _tb6_2;
          b12 = _tb6_3;
          const _bind$7 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b2, _1: b7, _2: b8, _3: b13 });
          const _tb7_0 = _bind$7._0;
          const _tb7_1 = _bind$7._1;
          const _tb7_2 = _bind$7._2;
          const _tb7_3 = _bind$7._3;
          b2 = _tb7_0;
          b7 = _tb7_1;
          b8 = _tb7_2;
          b13 = _tb7_3;
          const _bind$8 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$124$35({ _0: b3, _1: b4, _2: b9, _3: b14 });
          const _tb8_0 = _bind$8._0;
          const _tb8_1 = _bind$8._1;
          const _tb8_2 = _bind$8._2;
          const _tb8_3 = _bind$8._3;
          b3 = _tb8_0;
          b4 = _tb8_1;
          b9 = _tb8_2;
          b14 = _tb8_3;
          _tmp$17 = round + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      $bound_check(buf, i);
      buf[i] = b0;
      const _tmp$18 = 4 + i | 0;
      $bound_check(buf, _tmp$18);
      buf[_tmp$18] = b1;
      const _tmp$19 = 8 + i | 0;
      $bound_check(buf, _tmp$19);
      buf[_tmp$19] = b2;
      const _tmp$20 = 12 + i | 0;
      $bound_check(buf, _tmp$20);
      buf[_tmp$20] = b3;
      const _index_2 = 16 + i | 0;
      $bound_check(buf, _index_2);
      $bound_check(buf, _index_2);
      buf[_index_2] = (buf[_index_2] >>> 0) + (b4 >>> 0) | 0;
      const _index_4 = 20 + i | 0;
      $bound_check(buf, _index_4);
      $bound_check(buf, _index_4);
      buf[_index_4] = (buf[_index_4] >>> 0) + (b5 >>> 0) | 0;
      const _index_6 = 24 + i | 0;
      $bound_check(buf, _index_6);
      $bound_check(buf, _index_6);
      buf[_index_6] = (buf[_index_6] >>> 0) + (b6 >>> 0) | 0;
      const _index_8 = 28 + i | 0;
      $bound_check(buf, _index_8);
      $bound_check(buf, _index_8);
      buf[_index_8] = (buf[_index_8] >>> 0) + (b7 >>> 0) | 0;
      const _index_10 = 32 + i | 0;
      $bound_check(buf, _index_10);
      $bound_check(buf, _index_10);
      buf[_index_10] = (buf[_index_10] >>> 0) + (b8 >>> 0) | 0;
      const _index_12 = 36 + i | 0;
      $bound_check(buf, _index_12);
      $bound_check(buf, _index_12);
      buf[_index_12] = (buf[_index_12] >>> 0) + (b9 >>> 0) | 0;
      const _index_14 = 40 + i | 0;
      $bound_check(buf, _index_14);
      $bound_check(buf, _index_14);
      buf[_index_14] = (buf[_index_14] >>> 0) + (b10 >>> 0) | 0;
      const _index_16 = 44 + i | 0;
      $bound_check(buf, _index_16);
      $bound_check(buf, _index_16);
      buf[_index_16] = (buf[_index_16] >>> 0) + (b11 >>> 0) | 0;
      const _tmp$21 = 48 + i | 0;
      $bound_check(buf, _tmp$21);
      buf[_tmp$21] = b12;
      const _tmp$22 = 52 + i | 0;
      $bound_check(buf, _tmp$22);
      buf[_tmp$22] = b13;
      const _tmp$23 = 56 + i | 0;
      $bound_check(buf, _tmp$23);
      buf[_tmp$23] = b14;
      const _tmp$24 = 60 + i | 0;
      $bound_check(buf, _tmp$24);
      buf[_tmp$24] = b15;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed) {
  const seed$2 = moonbitlang$core$array$$FixedArray$makei$9$(8, (i) => {
    const _bind = moonbitlang$core$bytes$$Bytes$sub$46$inner(seed, Math.imul(i, 4) | 0, undefined);
    return (_bind.end - _bind.start | 0) >= 4 ? moonbitlang$core$bytes$$BytesView$unsafe_extract_uint_le(_bind, 0, 32) : moonbitlang$core$abort$$abort$2$("seed must be 32 bytes long");
  });
  const buffer = $make_array_len_and_init(64, 0);
  moonbitlang$core$random$internal$random_source$$chacha_block(seed$2, buffer, 0);
  const _bind = 32;
  return { buffer: buffer, seed: seed$2, i: 0, n: _bind, counter: 0 };
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$next(self) {
  const i = self.i;
  if (i >>> 0 >= self.n >>> 0) {
    return undefined;
  }
  self.i = (i >>> 0) + (1 >>> 0) | 0;
  const index = i & 31;
  const _tmp = self.buffer;
  const _tmp$2 = Math.imul(index, 2) | 0;
  $bound_check(_tmp, _tmp$2);
  const lo = moonbitlang$core$uint$$UInt$to_uint64(_tmp[_tmp$2]);
  const _tmp$3 = self.buffer;
  const _tmp$4 = (Math.imul(index, 2) | 0) + 1 | 0;
  $bound_check(_tmp$3, _tmp$4);
  const hi = moonbitlang$core$uint$$UInt$to_uint64(_tmp$3[_tmp$4]);
  return moonbitlang$core$builtin$$BitOr$lor$6$(moonbitlang$core$builtin$$Shl$shl$6$(hi, 32), lo);
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self) {
  self.counter = (self.counter >>> 0) + (4 >>> 0) | 0;
  if (self.counter === 16) {
    moonbitlang$core$array$$FixedArray$blit_to$46$inner$2$(self.buffer, self.seed, 8, 56, 0);
    self.counter = 0;
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, self.buffer, self.counter);
  self.i = 0;
  self.n = self.counter === 12 ? 28 : 32;
}
function moonbitlang$core$bytes$$Bytes$sub$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { bytes: self, start: start$2, end: end$2 } : moonbitlang$core$abort$$abort$3$("Invalid index for View");
}
function moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset, len) {
  const byte_index = offset >> 3;
  if ((offset & 7) === 0) {
    const _tmp = bs.bytes;
    const _tmp$2 = bs.start + byte_index | 0;
    $bound_check(_tmp, _tmp$2);
    const byte = _tmp[_tmp$2];
    const _p = moonbitlang$core$builtin$$Shr$shr$11$(byte, 8 - len | 0);
    return _p;
  } else {
    if (((offset & 7) + len | 0) <= 8) {
      const _tmp = bs.bytes;
      const _tmp$2 = bs.start + byte_index | 0;
      $bound_check(_tmp, _tmp$2);
      const _p = _tmp[_tmp$2];
      const byte = _p;
      const shift = 8 - ((offset & 7) + len | 0) | 0;
      const mask = (1 << len >>> 0) - (1 >>> 0) | 0;
      return byte >>> shift & mask;
    } else {
      const _tmp = bs.bytes;
      const _tmp$2 = bs.start + byte_index | 0;
      $bound_check(_tmp, _tmp$2);
      const _p = _tmp[_tmp$2];
      const b0 = _p;
      const _p$2 = byte_index + 1 | 0;
      const _tmp$3 = bs.bytes;
      const _tmp$4 = bs.start + _p$2 | 0;
      $bound_check(_tmp$3, _tmp$4);
      const _p$3 = _tmp$3[_tmp$4];
      const b1 = _p$3;
      const data = b0 << 8 | b1;
      const bit_mask = (1 << (16 - (offset & 7) | 0) >>> 0) - (1 >>> 0) | 0;
      const data$2 = data & bit_mask;
      const shift = 16 - ((offset & 7) + len | 0) | 0;
      return data$2 >>> shift | 0;
    }
  }
}
function moonbitlang$core$bytes$$BytesView$unsafe_extract_uint_le(bs, offset, len) {
  const bytes_needed = (len + 7 | 0) / 8 | 0;
  const b0 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset, 8);
  switch (bytes_needed) {
    case 2: {
      const b1 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 8 | 0, len - 8 | 0);
      return b1 << 8 | b0;
    }
    case 3: {
      const b1$2 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 8 | 0, 8);
      const b2 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 16 | 0, len - 16 | 0);
      return b2 << 16 | b1$2 << 8 | b0;
    }
    case 4: {
      const b1$3 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 8 | 0, 8);
      const b2$2 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 16 | 0, 8);
      const b3 = moonbitlang$core$bytes$$BytesView$unsafe_extract_byte(bs, offset + 24 | 0, len - 24 | 0);
      return b3 << 24 | b2$2 << 16 | b1$3 << 8 | b0;
    }
    default: {
      return moonbitlang$core$abort$$abort$2$("Invalid byte count for int32 extraction");
    }
  }
}
function moonbitlang$core$random$$Source$next$12$(self) {
  while (true) {
    const _bind = moonbitlang$core$random$internal$random_source$$ChaCha8$next(self);
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _x = _Some;
      return _x;
    }
    moonbitlang$core$random$internal$random_source$$ChaCha8$refill(self);
    continue;
  }
}
function moonbitlang$core$random$$Rand$chacha8$46$inner(seed) {
  if (seed.length !== 32) {
    moonbitlang$core$abort$$abort$1$("seed must be 32 bytes long");
  }
  return { self: moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed), method_0: moonbitlang$core$random$$Source$next$12$ };
}
function moonbitlang$core$random$$Rand$new(generator) {
  if (generator.$tag === 0) {
    return moonbitlang$core$random$$Rand$chacha8$46$inner($bytes_literal$0);
  } else {
    const _Some = generator;
    const _gen = _Some._0;
    return _gen;
  }
}
function moonbitlang$core$random$$umul128(a, b) {
  const aLo = moonbitlang$core$builtin$$BitAnd$land$6$(a, $4294967295L);
  const aHi = moonbitlang$core$builtin$$Shr$shr$6$(a, 32);
  const bLo = moonbitlang$core$builtin$$BitAnd$land$6$(b, $4294967295L);
  const bHi = moonbitlang$core$builtin$$Shr$shr$6$(b, 32);
  const x = moonbitlang$core$builtin$$Mul$mul$6$(aLo, bLo);
  const y = moonbitlang$core$builtin$$Add$add$6$(moonbitlang$core$builtin$$Mul$mul$6$(aHi, bLo), moonbitlang$core$builtin$$Shr$shr$6$(x, 32));
  const z = moonbitlang$core$builtin$$Add$add$6$(moonbitlang$core$builtin$$Mul$mul$6$(aLo, bHi), moonbitlang$core$builtin$$BitAnd$land$6$(y, $4294967295L));
  const w = moonbitlang$core$builtin$$Add$add$6$(moonbitlang$core$builtin$$Add$add$6$(moonbitlang$core$builtin$$Mul$mul$6$(aHi, bHi), moonbitlang$core$builtin$$Shr$shr$6$(y, 32)), moonbitlang$core$builtin$$Shr$shr$6$(z, 32));
  return { hi: w, lo: moonbitlang$core$builtin$$Mul$mul$6$(a, b) };
}
function moonbitlang$core$random$$Rand$uint64$46$inner(self, limit) {
  if (moonbitlang$core$builtin$$Eq$equal$6$(limit, $0L)) {
    const _p = self;
    return _p.method_0(_p.self);
  } else {
    if (moonbitlang$core$builtin$$Eq$equal$6$(moonbitlang$core$builtin$$BitAnd$land$6$(limit, moonbitlang$core$builtin$$Sub$sub$6$(limit, $1L)), $0L)) {
      const _p = self;
      return moonbitlang$core$builtin$$BitAnd$land$6$(_p.method_0(_p.self), moonbitlang$core$builtin$$Sub$sub$6$(limit, $1L));
    }
  }
  const _p = self;
  let r = moonbitlang$core$random$$umul128(_p.method_0(_p.self), limit);
  if (moonbitlang$core$builtin$$Compare$op_lt$5$(r.lo, limit)) {
    const thresh = moonbitlang$core$builtin$$Mod$mod$6$(moonbitlang$core$uint64$$UInt64$lnot(limit), limit);
    while (true) {
      if (moonbitlang$core$builtin$$Compare$op_lt$5$(r.lo, thresh)) {
        const _p$2 = self;
        r = moonbitlang$core$random$$umul128(_p$2.method_0(_p$2.self), limit);
        continue;
      } else {
        break;
      }
    }
  }
  return r.hi;
}
function moonbitlang$core$random$$Rand$uint$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_uint(_p.method_0(_p.self));
  }
  return moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$random$$Rand$uint64$46$inner(self, moonbitlang$core$uint$$UInt$to_uint64(limit)));
}
function moonbitlang$core$random$$Rand$int$46$inner(self, limit) {
  if (limit === 0) {
    const _p = self;
    return moonbitlang$core$uint64$$UInt64$to_int(moonbitlang$core$builtin$$Shr$shr$6$(_p.method_0(_p.self), 33));
  } else {
    return moonbitlang$core$random$$Rand$uint$46$inner(self, limit);
  }
}
function lfegg$pastebin$src$$generate_id() {
  let id = "";
  const r = moonbitlang$core$random$$Rand$new(Option$None$0$);
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < 6) {
      const idx = moonbitlang$core$random$$Rand$int$46$inner(r, lfegg$pastebin$src$$generate_id$46$chars$124$2.length);
      const ch_view = moonbitlang$core$string$$String$view$46$inner(lfegg$pastebin$src$$generate_id$46$chars$124$2, idx, idx + 1 | 0);
      id = `${id}${moonbitlang$core$builtin$$Show$to_string$0$(ch_view)}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return id;
}
(() => {
  lfegg$pastebin$src$$generate_id();
})();
