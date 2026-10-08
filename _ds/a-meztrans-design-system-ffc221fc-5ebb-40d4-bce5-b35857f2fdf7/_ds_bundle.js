/* @ds-bundle: {"format":4,"namespace":"AMeztransDesignSystem_ffc221","components":[{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StepCard","sourcePath":"components/content/StepCard.jsx"},{"name":"StripeDivider","sourcePath":"components/content/StripeDivider.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"PhoneField","sourcePath":"components/forms/PhoneField.jsx"},{"name":"RangeField","sourcePath":"components/forms/RangeField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"LangSwitch","sourcePath":"components/navigation/LangSwitch.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/content/FeatureCard.jsx":"c6432852fc00","components/content/SectionHeading.jsx":"db7f15afa8ed","components/content/StepCard.jsx":"47d3e61a1760","components/content/StripeDivider.jsx":"5412034a772e","components/core/Badge.jsx":"e088509e3435","components/core/Button.jsx":"ed43aa8f87bd","components/core/Icon.jsx":"82492e04d926","components/forms/Checkbox.jsx":"25d4443d1abd","components/forms/PhoneField.jsx":"8d9fec652739","components/forms/RangeField.jsx":"f92fbe4e6d80","components/forms/TextField.jsx":"07affdb0ffa9","components/navigation/LangSwitch.jsx":"22fe485eae2a","components/navigation/SiteFooter.jsx":"11246aec04d1","ui_kits/website/About.jsx":"883a22e499c3","ui_kits/website/Contact.jsx":"e8aaa2c87a77","ui_kits/website/Hero.jsx":"a82533844c0f","ui_kits/website/copy.js":"c8c5784f3f86"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AMeztransDesignSystem_ffc221 = window.AMeztransDesignSystem_ffc221 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  subtitle,
  level = 'h2',
  align = 'left',
  style
}) {
  const Tag = level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: level === 'h1' ? 24 : 14,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      font: level === 'h1' ? 'var(--text-h1)' : 'var(--text-h2)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: level === 'h1' ? 'var(--text-body-lg)' : 'var(--text-small)',
      color: 'var(--text-body)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StepCard.jsx
try { (() => {
function StepCard({
  number,
  accent = 'red',
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-step)/1 var(--font-sans)',
      color: accent === 'blue' ? 'var(--brand-secondary)' : 'var(--brand-primary)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StripeDivider.jsx
try { (() => {
function StripeDivider({
  thickness = 8,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: thickness,
      background: 'var(--brand-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: thickness,
      background: 'var(--brand-secondary)'
    }
  }));
}
Object.assign(__ds_scope, { StripeDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StripeDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  red: ['var(--red-100)', 'var(--red-700)'],
  blue: ['var(--blue-100)', 'var(--blue-700)'],
  neutral: ['var(--ink-100)', 'var(--ink-700)'],
  dark: ['var(--ink-800)', 'var(--white)']
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      font: 'var(--fw-semibold) var(--fs-xs)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.452.0/icons/';
function Icon({
  name = 'circle',
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
const T = {
  white: 'var(--surface-glass)',
  red: 'var(--surface-glass-red)',
  blue: 'var(--surface-glass-blue)'
};
function FeatureCard({
  tone = 'white',
  icon,
  title,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      boxSizing: 'border-box',
      padding: '28px 20px 26px',
      borderRadius: 'var(--radius-lg)',
      background: T[tone] || T.white,
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      border: '1px solid rgba(255,255,255,.7)',
      boxShadow: h ? 'var(--shadow-float)' : 'var(--shadow-card)',
      transform: h ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--text-h4)',
      fontSize: 16,
      color: 'var(--text-strong)',
      marginBottom: 18
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-small)',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--brand-primary)',
    hover: 'var(--brand-primary-hover)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent',
    sh: 'var(--shadow-red)'
  },
  secondary: {
    bg: 'var(--brand-secondary)',
    hover: 'var(--brand-secondary-hover)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent',
    sh: 'var(--shadow-blue)'
  },
  dark: {
    bg: 'var(--ink-800)',
    hover: 'var(--ink-900)',
    fg: 'var(--white)',
    bd: 'transparent',
    sh: 'var(--shadow-card)'
  },
  'outline-red': {
    bg: 'transparent',
    hover: 'var(--red-50)',
    fg: 'var(--ink-800)',
    bd: 'var(--brand-primary)',
    sh: 'none'
  },
  'outline-blue': {
    bg: 'transparent',
    hover: 'var(--blue-50)',
    fg: 'var(--ink-800)',
    bd: 'var(--brand-secondary)',
    sh: 'none'
  },
  ghost: {
    bg: 'transparent',
    hover: 'rgba(0,0,0,.05)',
    fg: 'var(--ink-800)',
    bd: 'transparent',
    sh: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: sm ? 'var(--control-h-sm)' : 'var(--control-h)',
      padding: sm ? '0 18px' : '0 36px',
      minWidth: sm ? 0 : 180,
      width: fullWidth ? '100%' : undefined,
      font: 'var(--text-button)',
      letterSpacing: variant.startsWith('outline') ? 'var(--ls-caps)' : 0,
      textTransform: variant.startsWith('outline') ? 'uppercase' : 'none',
      color: v.fg,
      background: h && !disabled ? v.hover : v.bg,
      border: 'var(--border-width-strong) solid ' + v.bd,
      borderRadius: 'var(--radius-sm)',
      boxShadow: disabled ? 'none' : v.sh,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: p && !disabled ? 'translateY(1px) scale(.98)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 16 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sm ? 16 : 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  style
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      font: 'var(--text-small)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      setC(!on);
      onChange && onChange(!on);
    },
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 2,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid ' + (on ? 'var(--brand-secondary)' : 'var(--border-default)'),
      background: on ? 'var(--brand-secondary)' : 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhoneField.jsx
try { (() => {
function PhoneField({
  code = '+372',
  flag = 'ee',
  placeholder = '0000-0000',
  value,
  onChange,
  style
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--control-h)',
      padding: '0 16px',
      boxSizing: 'border-box',
      background: 'var(--white)',
      border: '1px solid ' + (f ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-xs)',
      boxShadow: f ? '0 0 0 3px rgba(96,151,245,.18)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: 'https://flagcdn.com/w40/' + flag + '.png',
    alt: "",
    style: {
      width: 20,
      height: 14,
      objectFit: 'cover',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-body)'
    }
  }, code), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--text-small)',
      color: 'var(--text-body)'
    }
  }));
}
Object.assign(__ds_scope, { PhoneField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhoneField.jsx", error: String((e && e.message) || e) }); }

// components/forms/RangeField.jsx
try { (() => {
function RangeField({
  label,
  hint,
  min = 0,
  max = 60,
  value,
  defaultValue = 0,
  onChange,
  style
}) {
  const [v, setV] = React.useState(value ?? defaultValue);
  const cur = value ?? v;
  const pct = (cur - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-strong)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 56,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 'calc(' + pct + '% - ' + pct * 0.16 + 'px)',
      minWidth: 24,
      padding: '4px 8px',
      boxSizing: 'border-box',
      textAlign: 'center',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--text-caption)',
      color: 'var(--text-body)'
    }
  }, cur), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 37,
      height: 2,
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: 2,
      background: 'var(--brand-secondary)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 30,
      left: 'calc(' + pct + '% - ' + pct * 0.16 + 'px)',
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--brand-secondary)',
      boxShadow: '0 0 0 4px rgba(96,151,245,.18)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: cur,
    onChange: e => {
      setV(+e.target.value);
      onChange && onChange(+e.target.value);
    },
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 26,
      width: '100%',
      margin: 0,
      height: 24,
      opacity: 0,
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, min), /*#__PURE__*/React.createElement("span", null, max)));
}
Object.assign(__ds_scope, { RangeField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RangeField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  hint,
  placeholder,
  value,
  defaultValue,
  onChange,
  multiline,
  rows = 3,
  error,
  type = 'text',
  disabled,
  style
}) {
  const [f, setF] = React.useState(false);
  const bd = error ? 'var(--danger-500)' : f ? 'var(--border-focus)' : 'var(--border-default)';
  const s = {
    height: 'var(--control-h)',
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 20px',
    font: 'var(--text-small)',
    color: 'var(--text-body)',
    background: 'var(--white)',
    borderRadius: 'var(--radius-xs)',
    outline: 'none',
    transition: 'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',
    border: '1px solid ' + bd,
    boxShadow: f ? '0 0 0 3px rgba(96,151,245,.18)' : 'none',
    opacity: disabled ? .5 : 1
  };
  if (multiline) Object.assign(s, {
    height: 'auto',
    minHeight: rows * 28,
    padding: '16px 20px',
    resize: 'vertical'
  });
  const P = {
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: s
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-strong)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, P)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, P)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger-500)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangSwitch.jsx
try { (() => {
function LangSwitch({
  options = [{
    value: 'ru',
    label: 'Русский'
  }, {
    value: 'en',
    label: 'English'
  }],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      ...style
    }
  }, options.map((o, i) => {
    const c = i % 2 === 0 ? 'var(--brand-primary)' : 'var(--brand-secondary)';
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => onChange && onChange(o.value),
      style: {
        height: 40,
        padding: '0 18px',
        minWidth: 98,
        background: on ? c : 'transparent',
        color: on ? 'var(--white)' : 'var(--ink-800)',
        border: '2px solid ' + c,
        borderRadius: 'var(--radius-sm)',
        font: 'var(--fw-semibold) 13px/1 var(--font-sans)',
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  company = 'A-Mežtrans OÜ',
  year = 2025,
  credit,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: '40px 20px',
      textAlign: 'center',
      font: 'var(--fw-medium) var(--fs-sm)/1.8 var(--font-sans)',
      letterSpacing: '.02em',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", company, " ", year), credit && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .85
    }
  }, credit));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About({
  t,
  innerRef
}) {
  const {
    SectionHeading,
    Icon
  } = window.AMeztransDesignSystem_ffc221;
  return /*#__PURE__*/React.createElement("section", {
    ref: innerRef,
    "data-screen-label": "About",
    style: {
      ...wrap,
      paddingTop: 'var(--section-gap)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.aboutT,
    subtitle: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        maxWidth: 200
      }
    }, t.aboutS)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "house",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "bus",
    size: 18,
    color: "var(--brand-secondary)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "house",
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-lg)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("b", null, "A-Me\u017Etrans"), " ", t.aboutB)), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bus-photo.png",
    alt: "",
    style: {
      width: '100%',
      maxWidth: 510,
      justifySelf: 'end'
    }
  }));
}
function Process({
  t
}) {
  const {
    SectionHeading,
    StepCard
  } = window.AMeztransDesignSystem_ffc221;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Process",
    style: {
      ...wrap,
      padding: 'var(--section-gap) var(--container-pad) 60px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.procT,
    subtitle: t.procS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
      gap: 40,
      marginTop: 70
    }
  }, t.steps.map((s, i) => /*#__PURE__*/React.createElement(StepCard, {
    key: i,
    number: i + 1,
    accent: i % 2 ? 'blue' : 'red',
    title: s[0]
  }, s[1]))));
}
Object.assign(window, {
  About,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact({
  t,
  innerRef
}) {
  const {
    SectionHeading,
    TextField,
    PhoneField,
    RangeField,
    Button,
    StripeDivider,
    Icon
  } = window.AMeztransDesignSystem_ffc221;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    ref: innerRef,
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement(StripeDivider, {
    style: {
      marginTop: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '90px var(--container-pad) 80px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: t.ctaT,
    subtitle: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, t.ctaS)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      gap: 60,
      marginTop: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 26px/1.4 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+3725029918",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "+372 502 9918"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "mailto:aleksandr@a-meztrans.ee",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "aleksandr@a-meztrans.ee")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: 'var(--text-body-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--brand-primary)"
  }), "Paljasaare Tee 31, Tallinn, Harjumaa, Estonia")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 32,
    color: "var(--brand-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)'
    }
  }, t.okT), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-muted)'
    }
  }, t.okS), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-blue",
    size: "sm",
    onClick: () => setSent(false)
  }, t.again)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: t.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "email",
    placeholder: t.email
  }), /*#__PURE__*/React.createElement(PhoneField, null)), /*#__PURE__*/React.createElement(TextField, {
    multiline: true,
    rows: 3,
    placeholder: t.msg
  }), /*#__PURE__*/React.createElement(RangeField, {
    label: t.pax,
    hint: t.paxH,
    min: 0,
    max: 60
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, t.send)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) 11px/1.4 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, t.legal)))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  t,
  lang,
  setLang,
  onMore,
  onContact
}) {
  const {
    LangSwitch,
    Button,
    FeatureCard
  } = window.AMeztransDesignSystem_ffc221;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-6%',
      top: -80,
      width: 720,
      height: 720,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(245,104,102,.28), rgba(245,104,102,0) 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap',
      padding: '60px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "A-Meztrans",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement(LangSwitch, {
    value: lang,
    onChange: setLang,
    options: [{
      value: 'et',
      label: 'Eesti'
    }, {
      value: 'en',
      label: 'English'
    }]
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--text-h1)',
      letterSpacing: 'var(--ls-tight)',
      maxWidth: 640
    }
  }, t.h1[0], /*#__PURE__*/React.createElement("br", null), t.h1[1], /*#__PURE__*/React.createElement("br", null), t.h1[2]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '40px 0 0',
      font: 'var(--text-body-lg)',
      maxWidth: 560
    }
  }, t.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onMore
  }, t.more), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onContact
  }, t.contact)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 20,
      margin: '60px 0 0',
      maxWidth: 1020
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: t.f[0][0],
    title: t.f[0][1],
    style: {
      gridColumn: '1/-1',
      maxWidth: 500,
      justifySelf: 'center'
    }
  }, t.f[0][2]), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "red",
    icon: t.f[1][0],
    title: t.f[1][1]
  }, t.f[1][2]), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "blue",
    icon: t.f[2][0],
    title: t.f[2][1]
  }, t.f[2][2]))));
}
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-pad)',
  boxSizing: 'border-box'
};
Object.assign(window, {
  Hero,
  wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/copy.js
try { (() => {
window.MZ_COPY = {
  et: {
    h1: ['Pühendumine ohutusele ja', 'usaldusväärsusele -', 'see on meie peamine eesmärk.'],
    lead: 'Tõhus ja usaldusväärne reisijatevedu individuaalsete lepingute alusel. Garanteerime vastavuse ja ohutuse igal reisil.',
    more: 'Rohkem detaile',
    contact: 'Võtke ühendust',
    f: [['alarm-clock', 'Aja järgi testitud.', 'Oleme pakkunud usaldusväärset transporti alates 2004 aastast. Meie maine on teie garantii.'], ['users', 'Reisijatevedu.', 'Korraldame usaldusväärseid ja ohutuid reise erinevatele vahemaadele, lähtudes Teie nõudmistest.'], ['bus', 'Rikkalik parkla.', 'Vajalikule arvule reisijatele saame pakkuda sobivat transporti.']],
    aboutT: 'Meie ettevõttest',
    aboutS: 'Transporditeenus, reisijate- ja kaubavedu.',
    aboutB: 'asutati 2004. aastal. Pakume kiiret, kvaliteetset ja sõbralikku teenust parima hinnaga, mugavust ja professionaalseid juhte. Meie teenused on mõeldud kõigile, kes vajavad usaldusväärset ja kvaliteetset transporditeenust Eestis ja kaugemalgi.',
    procT: 'Koostöölepingu sõlmimise protsess',
    procS: 'Meie koostöö algus teiega.',
    steps: [['Pakkumiskutse', 'Kliendi reisijateveo vajaduste kindlaksmääramine. Pakkumise koostamine ja levitamine koos tingimuste ja hinnapoliitikaga.'], ['Esialgsed läbirääkimised', 'Pidage läbirääkimisi ettepanekute üksikasjade, sealhulgas hindade ja saatmise ajakava üle.'], ['Lepingu koostamine', 'Läbirääkimised lepingutingimuste, sealhulgas tariifide, vastutuse, kindlustuse ja vaidluste lahendamise üle.'], ['Lepingu sõlmimine ja järelevalve', 'Lepingu allkirjastamine. Täitmise järelevalve kehtestamine, võttes arvesse kvaliteeti ja tingimuste täitmist.']],
    ctaT: 'Vajad transporti?',
    ctaS: 'Küsige julgelt meie teenuseid. Vastame teie päringule esimesel võimalusel.',
    name: 'Sinu ees- ja perekonnanimi',
    email: 'Sinu email',
    msg: 'Kirjeldage oma huvi',
    pax: 'Reisijate arv',
    paxH: 'Erinõuete korral palun andke teada.',
    send: 'Saada',
    legal: 'Sellel nupul klõpsates nõustute sisestatud andmete töötlemisega ja nõustute privaatsuspoliitikaga.',
    okT: 'Aitäh! Päring on saadetud.',
    okS: 'Võtame teiega ühendust esimesel võimalusel.',
    again: 'Saada uus päring'
  },
  en: {
    h1: ['Commitment to safety and', 'reliability -', 'that is our main goal.'],
    lead: 'Efficient and reliable passenger transport on individual contracts. We guarantee compliance and safety on every trip.',
    more: 'More details',
    contact: 'Get in touch',
    f: [['alarm-clock', 'Tested by time.', 'We have provided reliable transport since 2004. Our reputation is your guarantee.'], ['users', 'Passenger transport.', 'We organise reliable and safe trips over any distance, based on your requirements.'], ['bus', 'Extensive fleet.', 'We can provide the right vehicle for any number of passengers.']],
    aboutT: 'About us',
    aboutS: 'Transport services, passenger and cargo.',
    aboutB: 'was founded in 2004. We offer fast, high-quality and friendly service at the best price, with comfort and professional drivers — for everyone who needs reliable transport in Estonia and beyond.',
    procT: 'How a contract comes together',
    procS: 'The start of our work with you.',
    steps: [['Request for proposal', 'Defining the client\'s transport needs. Preparing the offer with terms and pricing.'], ['Initial negotiations', 'Agreeing the details of the proposal, including prices and the schedule.'], ['Drafting the contract', 'Negotiating terms, including tariffs, liability, insurance and dispute resolution.'], ['Signing & supervision', 'Signing the contract. Setting up supervision of quality and compliance.']],
    ctaT: 'Need transport?',
    ctaS: 'Ask us about our services. We will reply to your request as soon as possible.',
    name: 'Your full name',
    email: 'Your email',
    msg: 'Describe your request',
    pax: 'Number of passengers',
    paxH: 'Let us know about special requirements.',
    send: 'Send',
    legal: 'By clicking this button you agree to the processing of your data and our privacy policy.',
    okT: 'Thank you! Request sent.',
    okS: 'We will get back to you shortly.',
    again: 'Send another request'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/copy.js", error: String((e && e.message) || e) }); }

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.StripeDivider = __ds_scope.StripeDivider;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.PhoneField = __ds_scope.PhoneField;

__ds_ns.RangeField = __ds_scope.RangeField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
