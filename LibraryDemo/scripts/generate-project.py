#!/usr/bin/env python3
"""Generate the standalone demo project without requiring XcodeGen or CocoaPods."""
from pathlib import Path
import hashlib
import json

root = Path(__file__).resolve().parents[1]
project = root / 'LibraryDemo.xcodeproj'
project.mkdir(exist_ok=True)
objects = {}
def identifier(name): return hashlib.sha1(name.encode()).hexdigest()[:24].upper()
def add(object_name, isa, **fields):
    key = identifier(object_name)
    objects[key] = dict(isa=isa, **fields)
    return key
def ref(name): return identifier(name)
sources = []
source_files = []
for file in sorted((root / 'Sources').glob('*.swift')):
    item = add(file.name, 'PBXFileReference', lastKnownFileType='sourcecode.swift', path=f'Sources/{file.name}', sourceTree='<group>')
    source_files.append(item)
    sources.append(add(file.name+' build', 'PBXBuildFile', fileRef=item))
runtime = add('Runtime', 'PBXFileReference', lastKnownFileType='folder', path='Runtime', sourceTree='<group>')
framework = add('NodeMobile', 'PBXFileReference', lastKnownFileType='wrapper.xcframework', path='Vendor/NodeMobile.xcframework', sourceTree='<group>')
product = add('product', 'PBXFileReference', explicitFileType='wrapper.application', path='LibraryDemo.app', sourceTree='BUILT_PRODUCTS_DIR', includeInIndex=0)
test_file = add('ui test source', 'PBXFileReference', lastKnownFileType='sourcecode.swift', path='Tests/LibraryDemoUITests.swift', sourceTree='<group>')
test_product = add('ui test product', 'PBXFileReference', explicitFileType='wrapper.cfbundle', path='LibraryDemoUITests.xctest', sourceTree='BUILT_PRODUCTS_DIR', includeInIndex=0)
add('root group', 'PBXGroup', children=source_files+[test_file, ref('products')], sourceTree='<group>')
add('products', 'PBXGroup', children=[product,test_product], name='Products', sourceTree='<group>')
add('sources phase', 'PBXSourcesBuildPhase', buildActionMask=2147483647, files=sources, runOnlyForDeploymentPostprocessing=0)
add('resources phase', 'PBXResourcesBuildPhase', buildActionMask=2147483647, files=[], runOnlyForDeploymentPostprocessing=0)
add('frameworks phase', 'PBXFrameworksBuildPhase', buildActionMask=2147483647, files=[ref(name+' product build') for name in ['ClaudeKit','ClaudeKitUI']], runOnlyForDeploymentPostprocessing=0)
add('embed phase', 'PBXCopyFilesBuildPhase', buildActionMask=2147483647, dstPath='', dstSubfolderSpec=10, files=[], name='Embed Frameworks', runOnlyForDeploymentPostprocessing=0)
base = dict(CLANG_ENABLE_MODULES='YES', CLANG_ENABLE_OBJC_ARC='YES', SDKROOT='iphoneos', IPHONEOS_DEPLOYMENT_TARGET='18.0', SWIFT_VERSION='5.0', ENABLE_BITCODE='NO', GCC_C_LANGUAGE_STANDARD='gnu17', ARCHS='arm64')
target = dict(PRODUCT_NAME='$(TARGET_NAME)', PRODUCT_BUNDLE_IDENTIFIER='ai.claudekit.demo', DEVELOPMENT_TEAM='T9G4574SJG', CODE_SIGN_STYLE='Automatic', GENERATE_INFOPLIST_FILE='YES', INFOPLIST_KEY_CFBundleDisplayName='ClaudeKit Demo', INFOPLIST_KEY_UILaunchScreen_Generation='YES', INFOPLIST_KEY_UIApplicationSceneManifest_Generation='YES', INFOPLIST_KEY_LSSupportsOpeningDocumentsInPlace='YES', INFOPLIST_KEY_UIFileSharingEnabled='YES', INFOPLIST_KEY_UISupportedInterfaceOrientations='UIInterfaceOrientationPortrait UIInterfaceOrientationLandscapeLeft UIInterfaceOrientationLandscapeRight', TARGETED_DEVICE_FAMILY='1,2', SUPPORTED_PLATFORMS='iphoneos iphonesimulator', SUPPORTS_MACCATALYST='NO', LD_RUNPATH_SEARCH_PATHS=['$(inherited)','@executable_path/Frameworks'], CODE_SIGN_ENTITLEMENTS='Sources/LibraryDemo.entitlements', MARKETING_VERSION='0.1.0', CURRENT_PROJECT_VERSION='1', ENABLE_USER_SCRIPT_SANDBOXING='YES')
for owner, settings in [('project',base),('target',target)]:
    for config in ['Debug','Release']:
        current = dict(settings)
        if owner == 'project': current.update(SWIFT_OPTIMIZATION_LEVEL='-Onone' if config=='Debug' else '-O', DEBUG_INFORMATION_FORMAT='dwarf' if config=='Debug' else 'dwarf-with-dsym')
        add(owner+config, 'XCBuildConfiguration', buildSettings=current, name=config)
    add(owner+' configs', 'XCConfigurationList', buildConfigurations=[ref(owner+'Debug'),ref(owner+'Release')], defaultConfigurationIsVisible=0, defaultConfigurationName='Debug')
add('target', 'PBXNativeTarget', buildConfigurationList=ref('target configs'), buildPhases=[ref(x+' phase') for x in ['sources','frameworks','resources','embed']], buildRules=[], dependencies=[], packageProductDependencies=[ref(name+' product') for name in ['ClaudeKit','ClaudeKitUI']], name='LibraryDemo', productName='LibraryDemo', productReference=product, productType='com.apple.product-type.application')
for config in ['Debug','Release']:
    add('tests'+config, 'XCBuildConfiguration', buildSettings=dict(PRODUCT_NAME='$(TARGET_NAME)', PRODUCT_BUNDLE_IDENTIFIER='ai.claudekit.demo.uitests', GENERATE_INFOPLIST_FILE='YES', DEVELOPMENT_TEAM='T9G4574SJG', CODE_SIGN_STYLE='Automatic', TEST_TARGET_NAME='LibraryDemo', TARGETED_DEVICE_FAMILY='1,2', SWIFT_VERSION='5.0'), name=config)
add('tests configs', 'XCConfigurationList', buildConfigurations=[ref('testsDebug'),ref('testsRelease')], defaultConfigurationIsVisible=0, defaultConfigurationName='Debug')
add('test sources', 'PBXSourcesBuildPhase', buildActionMask=2147483647, files=[add('ui test build','PBXBuildFile',fileRef=test_file)], runOnlyForDeploymentPostprocessing=0)
add('test frameworks', 'PBXFrameworksBuildPhase', buildActionMask=2147483647, files=[], runOnlyForDeploymentPostprocessing=0)
add('test proxy','PBXContainerItemProxy',containerPortal=ref('project'),proxyType=1,remoteGlobalIDString=ref('target'),remoteInfo='LibraryDemo')
add('test dependency','PBXTargetDependency',target=ref('target'),targetProxy=ref('test proxy'))
add('tests','PBXNativeTarget',buildConfigurationList=ref('tests configs'),buildPhases=[ref('test sources'),ref('test frameworks')],buildRules=[],dependencies=[ref('test dependency')],name='LibraryDemoUITests',productName='LibraryDemoUITests',productReference=test_product,productType='com.apple.product-type.bundle.ui-testing')
add('project', 'PBXProject', attributes={'LastUpgradeCheck':'2700'}, buildConfigurationList=ref('project configs'), compatibilityVersion='Xcode 14.0', developmentRegion='en', hasScannedForEncodings=0, knownRegions=['en','Base'], mainGroup=ref('root group'), productRefGroup=ref('products'), projectDirPath='', projectRoot='', targets=[ref('target'),ref('tests')],packageReferences=[ref('local package')])
add('local package', 'XCLocalSwiftPackageReference', relativePath='..')
for name in ['ClaudeKit','ClaudeKitUI']:
    productRef = add(name+' product', 'XCSwiftPackageProductDependency', productName=name)
    add(name+' product build', 'PBXBuildFile', productRef=productRef)
def encode(value, depth=0):
    indent='\t'*depth
    if isinstance(value,dict): return '{\n'+''.join(f'{indent}\t{json.dumps(str(k))} = {encode(v,depth+1)};\n' for k,v in value.items())+indent+'}'
    if isinstance(value,list): return '('+', '.join(encode(v,depth) for v in value)+')'
    if isinstance(value,int): return str(value)
    return json.dumps(value)
(project/'project.pbxproj').write_text('// !$*UTF8*$!\n'+encode(dict(archiveVersion=1,classes={},objectVersion=56,objects=objects,rootObject=ref('project')))+'\n')
schemes=project/'xcshareddata/xcschemes'
schemes.mkdir(parents=True,exist_ok=True)
build_ref=f'<BuildableReference BuildableIdentifier="primary" BlueprintIdentifier="{ref("target")}" BuildableName="LibraryDemo.app" BlueprintName="LibraryDemo" ReferencedContainer="container:LibraryDemo.xcodeproj"/>'
(schemes/'LibraryDemo.xcscheme').write_text(f'''<?xml version="1.0" encoding="UTF-8"?>
<Scheme LastUpgradeVersion="2700" version="1.3">
<BuildAction parallelizeBuildables="YES" buildImplicitDependencies="YES"><BuildActionEntries><BuildActionEntry buildForTesting="YES" buildForRunning="YES" buildForProfiling="YES" buildForArchiving="YES" buildForAnalyzing="YES">{build_ref}</BuildActionEntry></BuildActionEntries></BuildAction>
<TestAction buildConfiguration="Debug" selectedDebuggerIdentifier="Xcode.DebuggerFoundation.Debugger.LLDB" selectedLauncherIdentifier="Xcode.IDEFoundation.Launcher.LLDB" shouldUseLaunchSchemeArgsEnv="YES"><Testables><TestableReference skipped="NO" parallelizable="NO"><BuildableReference BuildableIdentifier="primary" BlueprintIdentifier="{ref('tests')}" BuildableName="LibraryDemoUITests.xctest" BlueprintName="LibraryDemoUITests" ReferencedContainer="container:LibraryDemo.xcodeproj"/></TestableReference></Testables></TestAction>
<LaunchAction buildConfiguration="Debug" selectedDebuggerIdentifier="Xcode.DebuggerFoundation.Debugger.LLDB" selectedLauncherIdentifier="Xcode.IDEFoundation.Launcher.LLDB" launchStyle="0" useCustomWorkingDirectory="NO" ignoresPersistentStateOnLaunch="NO" debugDocumentVersioning="YES" allowLocationSimulation="YES"><BuildableProductRunnable runnableDebuggingMode="0">{build_ref}</BuildableProductRunnable></LaunchAction>
<ProfileAction buildConfiguration="Release" shouldUseLaunchSchemeArgsEnv="YES" savedToolIdentifier="" useCustomWorkingDirectory="NO" debugDocumentVersioning="YES"><BuildableProductRunnable runnableDebuggingMode="0">{build_ref}</BuildableProductRunnable></ProfileAction>
<AnalyzeAction buildConfiguration="Debug"/><ArchiveAction buildConfiguration="Release" revealArchiveInOrganizer="YES"/>
</Scheme>''')
print(project)
