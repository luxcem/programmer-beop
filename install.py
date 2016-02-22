#!/bin/python3

import os, shutil
import xml.etree.ElementTree as ET

NAME = 'programmer_beop'
DESCRIPTION = 'Francais (Programmer Beop, ergonomique, derive de Bpo)'
LANGUAGE = 'fr'

def install_symbols():
    temp_file = './new_symbols'
    symbols_file = '/usr/share/X11/xkb/symbols/fr'
    symbols_layout = './symbols'
    write_no_edit = True
    with open(temp_file, 'w') as fout:
        # Clear old layout from symbols
        with open(symbols_file, 'r') as fr_keys:
            for line in fr_keys:
                if line.strip() == '// -- start {} --'.format(NAME):
                    write_no_edit = False
                if write_no_edit:
                    fout.write(line)
                if line.strip() == '// -- end {} --'.format(NAME):
                    write_no_edit = True

        with open(symbols_layout, 'r') as symbols:
            fout.write("\n")
            for line in symbols:
                fout.write(line)

    shutil.move(symbols_file, symbols_file + '.bak')
    shutil.move(temp_file, symbols_file)

def install_lst(lst_file):
    temp_file = './new_lst.lst'
    already_installed = False
    found_language = False
    with open(temp_file, 'w') as fout:
        with open(lst_file, 'r') as fin:
            for line in fin:
                if len(line.split()) > 1 and line.split()[1] == '{}:'.format(LANGUAGE):
                    found_language = True
                if len(line.split()) > 0 and line.split()[0] == NAME:
                    already_installed = True
                if ( len(line.split()) > 1 and line.split()[1] != '{}:'.format(LANGUAGE)
                     and found_language and not already_installed):
                    fout.write("  {name} {language}: {description}\n".format(
                        name=NAME,
                        language=LANGUAGE,
                        description=DESCRIPTION))
                fout.write(line)

    shutil.move(lst_file, lst_file + '.bak')
    shutil.move(temp_file, lst_file)

def install_xml(xml_file):
    temp_file = './new_xml.xml'
    tree = ET.parse(xml_file)
    root = tree.getroot()
    layouts = root.findall("./layoutList/layout")
    for layout in layouts:
        name = layout.find('configItem/name')
        if name.text == LANGUAGE:
            variantList = layout.find('variantList')
            sublayouts = variantList.findall('variant/configItem/name')
            if not list(filter(lambda x: x.text == NAME, sublayouts)):
                variant = ET.SubElement(variantList, 'variant')
                configItem = ET.SubElement(variant, 'configItem')
                name = ET.SubElement(configItem, 'name')
                name.text = NAME
                description = ET.SubElement(configItem, 'description')
                description.text = DESCRIPTION
    with open(xml_file) as f:
        header = f.readline() + f.readline()

    with open(temp_file, 'w+') as fout:
        # fout.write(header)
        tree.write(temp_file, encoding="utf8", xml_declaration=False)
        content = fout.read() + "\n"
        fout.seek(0)
        fout.write(header + content)

    shutil.move(xml_file, xml_file + '.bak')
    shutil.move(temp_file, xml_file)




if __name__ == '__main__':
    install_symbols()
    install_lst('/usr/share/X11/xkb/rules/base.lst')
    install_lst('/usr/share/X11/xkb/rules/evdev.lst')
    install_xml('/usr/share/X11/xkb/rules/base.xml')
    install_xml('/usr/share/X11/xkb/rules/evdev.xml')
